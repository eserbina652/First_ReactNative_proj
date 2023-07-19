import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {BurgerMenuSVG} from '../../../../assets/image';

const BurgerMenuBtn = () => {
  // const [open, setOpen] = useState(false);
  return (
    <View>
      <TouchableOpacity>
        <BurgerMenuSVG />
      </TouchableOpacity>
    </View>
  );
};

export default BurgerMenuBtn;
