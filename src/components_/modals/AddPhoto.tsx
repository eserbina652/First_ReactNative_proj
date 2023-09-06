import React, {useState} from 'react';
import {Modal, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {ModalProps} from './interface';
import {TabToAddSVG} from '../../assets/image';
import {Formik, FormikValues} from 'formik';
import {useTranslation} from 'react-i18next';
import {styles} from './styles';
import EncryptedStorage from 'react-native-encrypted-storage';
type PhotoType = 'jpeg' | 'png' | 'gif' | null;
interface PhotoDataI {
  photo: PhotoType;
  name: string;
  description: string;
}

const AddPhoto = ({modalCurrentState, modalOnChangeState}: ModalProps) => {
  const {t} = useTranslation();
  const inputsPlaceholder = {
    decr: t('descPhoto'),
    name: t('addPhotoBtn'),
  };
  const [photosData, setPhotosData] = useState<PhotoDataI[]>([]);
  const closeModal = () => {
    modalOnChangeState(false);
  };
  const addPhotoInfo = async (parameters: PhotoDataI) => {
    try {
      setPhotosData(prev => [
        ...prev,
        {
          photo: parameters?.photo,
          name: parameters?.name,
          description: parameters?.description,
        },
      ]);
      await EncryptedStorage.setItem('photoData', JSON.stringify(photosData));
    } catch (e) {
      console.log('Error was occurred by adding photo', e);
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalCurrentState}
      onRequestClose={closeModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={[styles.header, styles.paddings]}>
            <Text style={styles.headerText}>{t('uploadPhotosFor')}</Text>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.closeBtn}>×</Text>
            </TouchableOpacity>
          </View>
          <Formik
            initialValues={{photo: null, name: '', description: ''}}
            onSubmit={addPhotoInfo}>
            {({values, isValid, setFieldValue}: FormikValues) => (
              <View>
                <View style={styles.formatsSection}>
                  <View style={styles.formatsBlock}>
                    <View style={styles.formatEl}>
                      <Text>.jpeg</Text>
                    </View>
                    <View style={styles.formatEl}>
                      <Text>.png</Text>
                    </View>
                    <View style={styles.formatEl}>
                      <Text>.gif</Text>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <TabToAddSVG />
                  </TouchableOpacity>
                </View>
                <View style={styles.footerSection}>
                  <View style={styles.inputsBlock}>
                    <TextInput
                      style={styles.input}
                      placeholder={inputsPlaceholder.name}
                      onChangeText={text => setFieldValue('name', text)}
                      value={values.name}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder={inputsPlaceholder.decr}
                      onChangeText={text => setFieldValue('description', text)}
                      value={values.description}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => addPhotoInfo(values)}
                    disabled={!isValid}
                    style={styles.active_btn}>
                    <Text style={styles.login_btn_text}>
                      {t('addPhotoBtn')}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </Modal>
  );
};

export default AddPhoto;
