import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, ViewStyle} from 'react-native';
import {styles} from '../styles';
import DropDownImg from '../../../assets/image/DropDownImg';

interface DropDownInputProps {
  inputStyle?: ViewStyle;
}
const DropDownInput = ({inputStyle}: DropDownInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const options = ['Option 1', 'Option 2', 'Option 3'];

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
          placeholder={selectedOption || 'Choose your Country'}
          style={[inputStyle]}
        />
        <TouchableOpacity onPress={toggleDropdown}>
          <DropDownImg />
        </TouchableOpacity>
      </View>

      {isOpen && (
        <View style={styles.dropdownOptions}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => handleOptionSelect(option)}>
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default DropDownInput;
