/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from 'react-native';

import {HomeScreen} from './src/Screens/Home.Screen';
import {LoginScreen} from './src/Screens/Login.Screen';

const loginToken = {
  mail: 'prueba@prueba.com',
  pass: 'prueba1234',
};

const Screens = () => {
  const [verClave, setVerClave] = useState(false);
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      {mail === loginToken.mail && pass === loginToken.mail ? (
        <View>
          <Text>PokeAPI</Text>
        </View>
      ) : (
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>Inicia sesión para continuar</Text>
          </View>
          <View style={styles.formLogin}>
            <View style={styles.passCage}>
              <TextInput
                style={styles.textInput}
                placeholder="Correo"
                keyboardType="email-address"
                value={mail}
                autoCapitalize="none"
                onChangeText={setMail}
              />
            </View>
            <View style={styles.passCage}>
              <TextInput
                style={styles.inputPass}
                placeholder="Contraseña"
                keyboardType="default"
                autoCorrect={false}
                secureTextEntry={verClave}
                textContentType="password"
                value={pass}
                onChangeText={setPass}
                autoCapitalize="none"
              />
              <Pressable
                onPress={() => {
                  verClave === false ? setVerClave(true) : setVerClave(false);
                }}
                style={styles.pressableEye}>
                {verClave === false ? (
                  <Text>Ver clave</Text>
                ) : (
                  <Text>Ocultar</Text>
                )}
              </Pressable>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const App = () => {
  return <Screens />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    width: '100%',
    height: '100%',
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleStyle: {
    color: '#ff1d00',
    fontSize: 23,
  },
  textInput: {
    height: 46,
    backgroundColor: Colors.principal,
    width: '100%',
    fontSize: 15,
    marginTop: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.principal,
    color: Colors.blue,
    padding: 11,
    paddingLeft: 18,
    flexDirection: 'row',
  },
});

export default App;
