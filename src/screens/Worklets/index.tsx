import {Pressable, StyleSheet, Text, View} from 'react-native';
import {runOnJS, runOnUI} from 'react-native-reanimated';

const sayHello = (calback: () => void) => {
  'worklet';
  console.log('hello from js ');
  runOnJS(calback)();
};

export default () => {
  return (
    <View style={styles.main}>
      <Pressable
        onPress={() =>
          runOnUI(sayHello)(() => {
            console.log('calbaco');
          })
        }>
        <Text>Text</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
