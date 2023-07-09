import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  inputs: {
    backgroundColor: 'white',
    borderColor: 'lightgray',
    borderWidth: 1,
    fontSize: 13,
    minWidth: '100%',
    color: 'rgba(0,0,0,0.68)',
    padding: 17,
  },
  loginInput: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomWidth: 0,
  },
  specialInput: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  specialInput_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
