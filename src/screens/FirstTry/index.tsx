import {Pressable, Text, View} from 'react-native';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {withPause} from 'react-native-redash';

const Dot = ({progress, start, end}) => {
  const styles = useAnimatedStyle(() => {
    const interpolated = interpolate(
      progress.value,
      [start, end],
      [0.5, 1],
      Extrapolate.CLAMP,
    );
    return {
      transform: [{scale: interpolated}],
      borderRadius: interpolated * 10,
      backgroundColor: `rgba(${interpolated * 256},
        ${interpolated * 346},
        ${interpolated * 256},
        ${progress.value + 0.3})
      })`,
    };
  });
  return <Animated.View style={[{width: 20, height: 20}, styles]} />;
};
const Dots = ({progress, direction}) => {
  const styles = useAnimatedStyle(() => {
    return {flexDirection: direction.value ? 'row' : 'column'};
  });
  return (
    <Animated.View style={[{gap: 20, marginVertical: 10}, styles]}>
      {[0, 1, 2, 3].map((e, index, array) => {
        const delta = 1 / array.length;
        const start = e * delta;
        const end = start + delta;
        return <Dot progress={progress} start={start} end={end} />;
      })}
    </Animated.View>
  );
};
export default () => {
  const toggler = useSharedValue<number>(0);
  const isPaused = useSharedValue<boolean>(true);
  const direction = useSharedValue<boolean>(true);

  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        alignSelf: 'center',
        flex: 1,
      }}>
      <Dots progress={toggler} direction={direction} />
      <Pressable
        onPress={() => {
          isPaused.value = !isPaused.value;
          if (!toggler?.value) {
            toggler.value = withPause(
              withRepeat(
                withTiming(1, {
                  duration: 700,
                  easing: Easing.inOut(Easing.ease),
                }),
                -1,
                true,
              ),
              isPaused,
            );
          }
        }}>
        <Text>Click</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          direction.value = !direction.value;
        }}>
        <Text>Click for change direction</Text>
      </Pressable>
    </View>
  );
};
