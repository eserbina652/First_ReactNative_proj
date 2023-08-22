import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const DeleteAccountBtn = () => {
  return (
    <TouchableOpacity style={styles.active_btn}>
      <Text style={styles.login_btn_text}>Delete Account</Text>
    </TouchableOpacity>
  );
};

export default DeleteAccountBtn;

const styles = StyleSheet.create({
  active_btn: {
    maxWidth: '80%',
    minWidth: '80%',
    backgroundColor: '#FFF8FC',
    borderRadius: 10,
    padding: 16,
    alignSelf: 'center',
  },
  login_btn_text: {
    color: 'deeppink',
    alignSelf: 'center',
  },
});
