import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../buttons/modalssBtns';
import SuccessSvg from '../../assets/image/SuccessSVG';

interface SuccessProps {
  modalOnChangeState: React.Dispatch<React.SetStateAction<boolean>>;
  modalCurrentState: boolean;
}
const Success = ({modalOnChangeState, modalCurrentState}: SuccessProps) => {
  const closeModal = () => {
    modalOnChangeState(false);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalCurrentState}
      onRequestClose={closeModal}>
      <View style={stylesDefault.modalContainer}>
        <View style={stylesDefault.modalContent}>
          <SuccessSvg />
          <View style={stylesDefault.textWrap}>
            <Text style={[stylesDefault.text, stylesDefault.header]}>
              Success!
            </Text>
            <Text style={stylesDefault.text}>
              Your profile has been successfully updated
            </Text>
          </View>
          <TouchableOpacity onPress={closeModal} style={styles.active_btn}>
            <Text style={styles.login_btn_text}>Close Modal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Success;

const stylesDefault = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    gap: 30,
  },
  textWrap: {
    alignItems: 'center',
    gap: 12,
  },
  text: {
    maxWidth: 250,
    textAlign: 'center',
  },
  header: {
    color: 'black',
  },
});
