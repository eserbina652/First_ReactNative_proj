import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import AddPhotoSvg from '../../assets/image/AddPhotoSVG';

const AddPhotosBtn = () => {
  const [addPhotos, setAddPhotos] = useState([]);

  const onAddPhotos = () => {
    setAddPhotos(prevState => {
      let newElements = [...prevState];
      // @ts-ignore
      newElements.push(addPhotos);
      return newElements;
    });
  };
  return (
    <View>
      <TouchableOpacity onPress={onAddPhotos}>
        <AddPhotoSvg />
      </TouchableOpacity>
    </View>
  );
};

export default AddPhotosBtn;
