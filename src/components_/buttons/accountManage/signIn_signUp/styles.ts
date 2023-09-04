import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  active_btn: {
    minWidth: '100%',
    backgroundColor: '#FF0090',
    borderRadius: 10,
    padding: 16,
    // shadowColor: '#FF0090',
    // shadowOpacity: 0.9,
    // shadowOffset: {width: 10, height: 20},
    // shadowRadius: 4,
    // elevation: 4,
  },
  register_btn: {
    padding: 16,
    backgroundColor: '#ffe0f5',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  register_btn_text: {
    color: '#FF0090',
    borderRightWidth: 1,
    padding: 5,
    flex: 3,
    borderRightColor: 'rgba(255,0,144,0.1)',
  },
  register_img: {
    alignSelf: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  login_btn_text: {
    color: 'white',
    alignSelf: 'center',
  },
  disabled_btn: {
    backgroundColor: 'rgba(255,0,144,0.35)',
  },
});
