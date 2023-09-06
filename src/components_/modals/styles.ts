import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContentSuccess: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    gap: 30,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    width: '75%',
    paddingBottom: 36,
  },
  formatsSection: {
    backgroundColor: '#FAFAFA',
    paddingVertical: 17,
    paddingHorizontal: 40,
    gap: 20,
    margin: 25,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#EFEFEF',
  },
  inputsBlock: {
    paddingHorizontal: 25,
  },
  input: {
    minWidth: '80%',
    alignItems: 'flex-start',
    color: 'rgba(0,0,0,0.67)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.06)',
  },
  formatEl: {
    backgroundColor: 'white',
    borderRadius: 3,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  formatsBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeBtn: {
    maxWidth: 250,
    fontSize: 24,
  },
  footerSection: {
    gap: 36,
  },
  paddings: {
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  header: {
    backgroundColor: '#F1F1F1',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#3A3A3A',
    fontWeight: '600',
    fontSize: 14,
  },
  active_btn: {
    minWidth: '60%',
    backgroundColor: '#FF0090',
    borderRadius: 10,
    padding: 16,
    alignSelf: 'center',
  },
  login_btn_text: {
    color: 'white',
    alignSelf: 'center',
  },
  textWrap: {
    alignItems: 'center',
    gap: 12,
  },
  text: {
    maxWidth: 250,
    textAlign: 'center',
  },
  headerSuccess: {
    color: 'black',
  },
});
