import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  active_btn: {
    minWidth: '100%',
    backgroundColor: '#FF0090',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#FF0090',
    shadowOpacity: 0.9,
    shadowOffset: {width: 10, height: 20},
    shadowRadius: 4,
    elevation: 4,
  },
  login_btn_text: {
    color: 'white',
    alignSelf: 'center',
  },
  disabled_btn: {
    backgroundColor: 'rgba(255,0,144,0.29)',
  },
});
