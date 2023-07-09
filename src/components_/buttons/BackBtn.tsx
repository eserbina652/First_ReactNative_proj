import React, {ReactNode} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
interface BackBtnProps {
  component: ReactNode;
}
const BackBtn = ({component}: BackBtnProps) => {
  return (
    <View style={styles.backArrowBlock}>
      <TouchableOpacity>{component}</TouchableOpacity>
    </View>
  );
};

export default BackBtn;

const styles = StyleSheet.create({
  backArrowBlock: {
    alignSelf: 'flex-start',
  },
});
