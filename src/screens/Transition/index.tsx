import {Pressable, Text, View} from 'react-native';
import {AnimatedCard, cards} from '../../components/Card';
import {
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';
import {useEffect, useState} from 'react';
// import {useSpring, useTiming} from 'react-native-redash';

const useSpring = state => {
  const value = useSharedValue(0);
  useEffect(() => {
    value.value = typeof state === 'number' ? state : state ? 1 : 0;
  }, [state, value]);
  return useDerivedValue(() => {
    return withRepeat(withSpring(value.value), -1, true);
  });
};
export default () => {
  const [toggled, setToggled] = useState(false);
  const transition = useSpring(toggled);

  return (
    <>
      <View style={{flex: 1, justifyContent: 'center'}}>
        {cards.map((e, index) => {
          return (
            <AnimatedCard card={e} transition={transition} index={index} />
          );
        })}
      </View>
      <Pressable style={{flex: 0.1}} onPress={() => setToggled(!toggled)}>
        <Text>Click</Text>
      </Pressable>
    </>
  );
};
