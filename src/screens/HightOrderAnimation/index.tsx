import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';

export default () => {
  const [toggled, setToggled] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable style={{flex: 0.1}} onPress={() => setToggled(!toggled)}>
        <Text>Click</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-between'},
});
