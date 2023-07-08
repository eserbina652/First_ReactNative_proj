import {Dimensions, PixelRatio, View} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Svg, {Circle} from 'react-native-svg';
import {canvas2Polar, polar2Canvas} from 'react-native-redash';
import {PanGestureHandler} from 'react-native-gesture-handler';

const {PI} = Math;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const {width, height} = Dimensions.get('window');
const r = PixelRatio.roundToNearestPixel(width / 2);
const center = {x: 0, y: height / 2.5 + 10};
const defaultValue = 6.277690829030713; //defaultTheta for start in the end of first part of circle
//canvas2Polar({x: 0, y: 0}, center).theta

const Coursor = ({theta}) => {
  const onGestureEvent = useAnimatedGestureHandler({
    onActive: (event, context) => {
      const {translationX, translationY} = event;
      let x = context.offsetX + translationX;
      let y = context.offsetY + translationY;
      const polar = canvas2Polar({x, y}, center);
      if (polar.radius > r) {
        const clampedPolar = {radius: r, theta: polar.theta};
        const clampedCanvas = polar2Canvas(clampedPolar, center);
        x = clampedCanvas.x;
        y = clampedCanvas.y;
      }

      let value = canvas2Polar({x, y}, center).theta;
      if (value < 0) {
        value += 2 * PI;
      }
      const deltaTheta = value - theta.value;
      if (deltaTheta > PI || deltaTheta < -PI) {
        return;
      }
      if (value >= 0 && value <= PI * 2 - 0.0001) {
        theta.value = value;
      }
    },
    onStart: (event, context) => {
      const {x: translateX, y: translateY} = polar2Canvas(
        {
          theta: theta.value,
          radius: r - 40,
        },
        center,
      );
      context.offsetX = translateX;
      context.offsetY = translateY;
    },
  });
  const style = useAnimatedStyle(() => {
    const {x: translateX, y: translateY} = polar2Canvas(
      {
        theta: theta.value,
        radius: r - 40,
      },
      center,
    );
    return {
      transform: [{translateY: translateY}, {translateX: translateX}],
    };
  });
  return (
    <PanGestureHandler {...{onGestureEvent}}>
      <Animated.View
        style={[
          {
            borderRadius: 20,
            borderColor: 'white',
            borderWidth: 2,
            backgroundColor: 'pink',
            width: 20,
            height: 20,
            zIndex: 2,
          },
          style,
        ]}
      />
    </PanGestureHandler>
  );
};
export default () => {
  const theta = useSharedValue(defaultValue);
  const props = useAnimatedProps(() => {
    const thisValue = Math.max(0, Math.min(6, theta.value));

    // Calculate the red, green, and blue color channels based on the input value.
    const red = Math.floor(
      Math.min(Math.max(0, 1 - Math.abs(thisValue - 3) / 3) * 255),
    );
    const g = Math.floor(
      Math.min(Math.max(0, 1 - Math.abs(thisValue - 2) / 2) * 255),
    );
    const b = Math.floor(
      Math.min(Math.max(0, 1 - Math.abs(thisValue - 5) / 3) * 255),
    );

    return {
      strokeDashoffset: theta.value * (r - 40),
      stroke: `rgba(${red}, ${g}, ${b}, 1)`,
    };
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <View style={{width: '100%', height: '100%'}}>
        <Animated.View style={{alignItems: 'center'}}>
          <Coursor theta={theta} />
          <Svg>
            <Circle
              cx={r}
              cy={height / 2.5}
              r={r - 40}
              fill={'transparent'}
              stroke={'white'}
              strokeWidth={20}
            />
            <AnimatedCircle
              animatedProps={props}
              cx={r}
              cy={height / 2.5}
              r={r - 40}
              fill={'transparent'}
              strokeWidth={20}
              strokeDasharray={`${(r - 40) * 2 * PI}`}
            />
          </Svg>
        </Animated.View>
      </View>
    </View>
  );
};
