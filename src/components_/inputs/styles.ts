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
  filled: {
    color: '#000000',
  },
  loginInput: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  inputErr: {
    marginBottom: 10,
    marginTop: 5,
    marginLeft: 10,
    color: 'red',
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
    maxHeight: 70,
  },
  dropdown_btn: {
    alignItems: 'flex-end',
    paddingHorizontal: 15,
  },
  dropdownOptions: {
    marginTop: 5,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 160,
  },
  option: {
    flexDirection: 'row',
    gap: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  passwordVisibleImg: {
    right: 40,
  },
  dropdownScroll: {
    flex: 1,
    height: 160,
  },
});
