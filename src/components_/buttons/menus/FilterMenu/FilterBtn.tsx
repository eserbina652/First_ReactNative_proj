import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {FilterSVG} from '../../../../assets/image';

const FilterBtn = () => {
  // const [open, setOpen] = useState(false);
  return (
    <View>
      <TouchableOpacity>
        <FilterSVG />
      </TouchableOpacity>
    </View>
  );
};

export default FilterBtn;
