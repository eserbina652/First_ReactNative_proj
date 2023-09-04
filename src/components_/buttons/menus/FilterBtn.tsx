import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {FilterSVG} from '../../../assets/image';

const FilterBtn = () => {
  return (
    <View>
      <TouchableOpacity>
        <FilterSVG />
      </TouchableOpacity>
    </View>
  );
};

export default FilterBtn;
