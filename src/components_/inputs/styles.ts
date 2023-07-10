import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  inputs: {
    backgroundColor: 'white',
    borderColor: 'lightgray',
    borderWidth: 1,
    fontSize: 13,
    minWidth: '100%',
    color: 'rgba(0,0,0,0.68)',
    padding: 15,
    borderRadius: 10,
  },
  loginInput: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  specialInput: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  specialInput_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 6,
    paddingBottom: 6,
  },
  dropdownOptions: {
    marginTop: 5,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  passwordVisibleImg: {
    right: 40,
  },
});
