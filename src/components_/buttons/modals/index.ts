import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  active_btn: {
    minWidth: '60%',
    backgroundColor: '#FF0090',
    borderRadius: 10,
    padding: 16,
    alignSelf: 'center',
    shadowColor: '#ff0091',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  login_btn_text: {
    color: 'white',
    alignSelf: 'center',
  },
  addPhotoWrap: {
    alignSelf: 'center',
  },
});
