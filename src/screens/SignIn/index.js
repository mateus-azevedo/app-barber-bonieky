import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styles';
import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

import SignInput from '../../components/SignInput';

export default () => {
  const navigation = useNavigation();

  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleSignClick = () => {};

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}],
    });
  };

  return (
    <Container>
      <BarberLogo width="100%" height="160" />

      <InputArea>
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={text => setEmailField(text)}
        />
        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={text => setPasswordField(text)}
          password={true}
        />

        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>
          Ainda não possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
