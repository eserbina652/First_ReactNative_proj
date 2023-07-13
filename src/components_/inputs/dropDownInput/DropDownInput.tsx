import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from '../styles';
import DropDownImg from '../../../assets/image/DropDownImg';
import {countries} from '../../../api/data/dropdownData';

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
          // editable={false}коли змінюю цей параметр то текст знов блідий
        />
        <TouchableOpacity
          style={styles.dropdown_btn}
          onPress={() => toggleDropdown()}>
          <DropDownImg />
        </TouchableOpacity>
      </View>

      {isOpen && (
        <View style={styles.dropdownOptions}>
          <ScrollView nestedScrollEnabled={true} style={styles.dropdownScroll}>
            {options.map(option => (
              <TouchableOpacity
                key={option.id}
                style={styles.option}
                onPress={() =>
                  handleOptionSelect(`${option.name} ${option.flag_emoji}`)
                }>
                <Text>{option.name}</Text>
                <Text>{option.flag_emoji}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default DropDownInput;
