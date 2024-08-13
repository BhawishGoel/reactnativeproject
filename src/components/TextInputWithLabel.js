import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const TextInputWithLable = ({
  label,
  placeholder,
  value,
  inputStyle,
  textStyle,
  isSecure,
  onChangeText,
  ...props
}) => {
  return (
    <View style={{marginBottom: 16}}>
      <Text
        style={{
          fontSize: 19,
          color: 'black',
          marginBottom: 8,
          fontWeight: 'bold',
        }}>
        {label}
      </Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={styles.inputStyle}
        placeholderTextColor="grey"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    height: 48,
    borderWidth: 1,
    bordercolor: 'grey',
    color: 'black',
    paddingHorizontal: 16,
  },
});

export default TextInputWithLable;
