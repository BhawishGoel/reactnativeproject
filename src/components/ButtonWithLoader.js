import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';

const ButtonWithLoader = ({
    text,
    onPress
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnStyle}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    height: 48,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ButtonWithLoader;
