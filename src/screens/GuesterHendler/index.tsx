import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';
import {clamp, withBouncing} from 'react-native-redash';
import {Card, cards} from '../../components/Card';

const {width, height} = Dimensions.get('window');
const CARD_ASPECT_RATIO = 1324 / 863;
const CARD_WIDTH = width - 8 * 8;
const CARD_HEIGHT = CARD_WIDTH / CARD_ASPECT_RATIO;

export default () => {
  const boundX = width - CARD_WIDTH;
  const boundY = height - CARD_HEIGHT - 100;
  const translateY = useSharedValue(0);
  const translateX = useSharedValue(0);
  // const onGestureEvent = useAnimatedGestureHandler({
  //   onActive: (event, context) => {
  //     translateX.value = clamp(context.offsetX + event.translationX, 0, boundX);
  //     translateY.value = clamp(context.offsetY + event.translationY, 0, boundY);
  //   },
  //   onStart: (event, context) => {
  //     context.offsetX = translateX.value;
  //     context.offsetY = translateY.value;
  //   },
  //   onEnd: event => {
  //     translateX.value = withDecay({
  //       velocity: event.velocityX,
  //       clamp: [0, boundX],
  //     });
  //     translateY.value = withDecay({
  //       velocity: event.velocityY,
  //       clamp: [0, boundY],
  //     });
  //   },
  // });
  const onGestureEvent = useAnimatedGestureHandler({
    onActive: (event, context) => {
      translateX.value = clamp(context.offsetX + event.translationX, 0, boundX);
      translateY.value = clamp(context.offsetY + event.translationY, 0, boundY);
    },
    onStart: (event, context) => {
      context.offsetX = translateX.value;
      context.offsetY = translateY.value;
    },
    onEnd: event => {
      translateX.value = withBouncing(
        withDecay({
          velocity: event.velocityX,
        }),
        0,
        boundX,
      );
      translateY.value = withBouncing(
        withDecay({
          velocity: event.velocityY,
        }),
        0,
        boundY,
      );
    },
  });
  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: translateY.value},
        {translateX: translateX.value},
      ],
    };
  });
  return (
    <PanGestureHandler {...{onGestureEvent}}>
      <Animated.View style={style}>
        <Card card={cards[2]} />
      </Animated.View>
    </PanGestureHandler>
  );
};
