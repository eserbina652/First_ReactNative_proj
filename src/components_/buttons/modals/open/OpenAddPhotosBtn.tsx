import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import AddPhotoSvg from '../../../../assets/image/AddPhotoSVG';
import AddPhoto from '../../../modals/AddPhoto';
import {styles} from '../index';

const OpenAddPhotosBtn = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.addPhotoWrap}>
      <TouchableOpacity onPress={openModal}>
        <AddPhotoSvg />
      </TouchableOpacity>
      <AddPhoto
        modalOnChangeState={setModalVisible}
        modalCurrentState={modalVisible}
      />
    </View>
  );
};

export default OpenAddPhotosBtn;
