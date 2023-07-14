import React, {useState} from 'react';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from '../styles';
import {countries} from '../../../api/data/dropdownData';
import {DropDownImgSVG} from '../../../assets/image';

interface DropDownInputProps {
  inputStyle?: ViewStyle;
}
const options = countries;
const DropDownInput = ({inputStyle}: DropDownInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <View>
      <View style={[styles.inputs, styles.dropdownInput]}>
        <TextInput
          value={selectedOption}
          placeholder={'Choose your Country'}
          style={[inputStyle]}
        />
        <TouchableOpacity
          style={styles.dropdown_btn}
          onPress={() => toggleDropdown()}>
          <DropDownImgSVG />
        </TouchableOpacity>
      </View>

      {isOpen && (
        <View style={styles.dropdownOptions}>
          <FlatList
            nestedScrollEnabled={true}
            data={options}
            keyExtractor={option => option.id}
            style={styles.dropdownScroll}
            renderItem={({item}) => (
              <TouchableOpacity
                key={item.id}
                style={styles.option}
                onPress={() =>
                  handleOptionSelect(`${item.name} ${item.flag_emoji}`)
                }>
                <Text>{item.name}</Text>
                <Text>{item.flag_emoji}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default DropDownInput;
