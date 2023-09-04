import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {BurgerMenuSVG} from '../../../assets/image';
import {useNavigation, DrawerActions} from '@react-navigation/native';
const BurgerMenuBtn = () => {
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <View>
      <TouchableOpacity onPress={openDrawer}>
        <BurgerMenuSVG />
      </TouchableOpacity>
    </View>
  );
};

export default BurgerMenuBtn;
