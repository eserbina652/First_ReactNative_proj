import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import SuccessSvg from '../../assets/image/SuccessSVG';
import {ModalProps} from './interface';
import {styles} from './styles';

const Success = ({modalOnChangeState, modalCurrentState}: ModalProps) => {
  const closeModal = () => {
    modalOnChangeState(false);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalCurrentState}
      onRequestClose={closeModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContentSuccess}>
          <SuccessSvg />
          <View style={styles.textWrap}>
            <Text style={[styles.text, styles.headerSuccess]}>Success!</Text>
            <Text style={styles.text}>
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
