import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../index';
import Success from '../../../modals/Success';
interface SimpleBtnProps {
  text: string;
}
const OpenSuccessBtn = ({text}: SimpleBtnProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.active_btn} onPress={openModal}>
        <Text style={styles.login_btn_text}>{text}</Text>
      </TouchableOpacity>
      <Success
        modalOnChangeState={setModalVisible}
        modalCurrentState={modalVisible}
      />
    </View>
  );
};

export default OpenSuccessBtn;
