import {Pressable, ScrollView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const screents = [
  {name: 'Worklets'},
  {name: 'GuesterHendler'},
  {name: 'Transition'},
  {name: 'HIghtOrder'},
  {name: 'SVG'},
  {name: 'FirstTry'},
];
export default () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      {screents.map(el => {
        return (
          <Pressable onPress={() => navigation.navigate(el.name)}>
            <Text>{el.name}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};
