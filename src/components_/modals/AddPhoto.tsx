import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../buttons/modalssBtns';
import {ModalProps} from './interface';
import {TabToAddSVG} from '../../assets/image';
import {Formik, FormikValues} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';
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
      await AsyncStorage.setItem('photoData', JSON.stringify(photosData));
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
      <View style={stylesDefault.modalContainer}>
        <View style={stylesDefault.modalContent}>
          <View style={[stylesDefault.header, stylesDefault.paddings]}>
            <Text style={stylesDefault.headerText}>{t('uploadPhotosFor')}</Text>
            <TouchableOpacity onPress={closeModal}>
              <Text style={stylesDefault.closeBtn}>×</Text>
            </TouchableOpacity>
          </View>
          <Formik
            initialValues={{photo: null, name: '', description: ''}}
            onSubmit={addPhotoInfo}>
            {({values, isValid, setFieldValue}: FormikValues) => (
              <View>
                <View style={stylesDefault.formatsSection}>
                  <View style={stylesDefault.formatsBlock}>
                    <View style={stylesDefault.formatEl}>
                      <Text>.jpeg</Text>
                    </View>
                    <View style={stylesDefault.formatEl}>
                      <Text>.png</Text>
                    </View>
                    <View style={stylesDefault.formatEl}>
                      <Text style={stylesDefault.formatElText}>.gif</Text>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <TabToAddSVG />
                  </TouchableOpacity>
                </View>
                <View style={stylesDefault.footerSection}>
                  <View style={stylesDefault.inputsBlock}>
                    <TextInput
                      style={stylesDefault.input}
                      placeholder={inputsPlaceholder.name}
                      onChangeText={text => setFieldValue('name', text)}
                      value={values.name}
                    />
                    <TextInput
                      style={stylesDefault.input}
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

const stylesDefault = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    width: '75%',
    paddingBottom: 36,
    // gap: 30,
  },
  textWrap: {
    // alignItems: 'center',
    // gap: 12,
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
    // maxWidth: '100%',
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
  formatElText: {
    // fontSize: 14,
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
    // paddingVertical: 36,
    // paddingHorizontal: 25,
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
});
