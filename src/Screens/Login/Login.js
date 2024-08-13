import {StyleSheet, Text, View, SafeAreaView, Alert} from 'react-native';
import React, {useState} from 'react';
import TextInputWithLable from '../../components/TextInputWithLabel';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import validator from '../utils/validations';
import { showError } from '../utils/helperFunction';

const Login = ({navigation}) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    isSecure: true,
  });
  const {isLoading, email, password, isSecure} = state;
  const updateState = data => setState(() => ({...state, ...data}));

  const isValidData = () => {
    const error = validator({
      email,
      password
    })
    if(error){
      showError(error)
      return false
    }
    return true 
  }

  const onLogin = () => {
        const checkValid = isValidData()
        if(checkValid){
          navigation.navigate('Signup');
        }
  };
  return (
    <View style={styles.container}>
      <TextInputWithLable
        label="Email"
        placeholder="Enter Your Email"
        onChangeText={email => updateState({email})}
      />

      <TextInputWithLable
        label="Password"
        placeholder="Enter Password"
        isSecure={isSecure}
        secureTextEntry={isSecure}
        onChangeText={password => updateState({password})}
      />

      <ButtonWithLoader text="Login" onPress={onLogin} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
  },
});
