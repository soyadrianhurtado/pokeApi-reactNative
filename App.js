/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {styles} from './src/utils/styles';
import {stylesDark} from './src/utils/stylesDark';
const loginToken = {
  mail: 'prueba@prueba.com',
  pass: 'prueba1234',
};

const Screens = () => {
  const [verClave, setVerClave] = useState(true);
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [auth, setAuth] = useState(false);
  const [error, setError] = useState();
  const [modo, setModo] = useState('light');
  const validar = () => {
    if (mail === loginToken.mail && pass === loginToken.pass) {
      setAuth(true);
    } else {
      setError('Correo o contraseña invalidos');
    }
  };
  const PokeList = () => {
    const [DATA, setDATA] = useState([]);
    useEffect(() => {
      function pokemonApi() {
        try {
          const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';
          fetch(API_URL)
            .then(resultado => resultado.json())
            .then(data => setDATA(data.results));
        } catch (err) {
          throw err;
        }
      }
      if (auth) {
        return pokemonApi();
      }
    }, []);
    if (!DATA) {
      return (
        <View>
          {modo === 'light' ? (
            <ActivityIndicator size="large" color="#363b81" />
          ) : (
            <ActivityIndicator size="large" color="#fbd743" />
          )}
        </View>
      );
    }
    return (
      <View>
        <Text style={modo === 'light' ? styles.titulo : stylesDark.titulo}>
          Lista de Pokemons
        </Text>
        <ScrollView>
          <View style={styles.containerList}>
            {DATA.map((pokemon, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  style={modo === 'light' ? styles.card : stylesDark.card}>
                  <Image
                    style={styles.cardImage}
                    source={{
                      uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`,
                    }}
                  />
                  <Text
                    style={
                      modo === 'light' ? styles.cardName : stylesDark.cardName
                    }>
                    {pokemon.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.safeContainer}>
      {auth ? (
        <View style={styles.containerPrincipal}>
          <View style={modo === 'light' ? styles.heading : stylesDark.heading}>
            <Pressable
              style={styles.headingClose}
              onPress={() => setAuth(false)}>
              <Text
                style={
                  modo === 'light'
                    ? styles.headingCloseText
                    : stylesDark.headingCloseText
                }>
                Cierre de Sesión
              </Text>
            </Pressable>
            <View style={styles.modo}>
              <Text
                style={
                  modo === 'light' ? styles.modoTexto : stylesDark.modoTexto
                }>
                Light
              </Text>
              <Pressable
                style={
                  modo === 'light' ? styles.pressModo : stylesDark.pressModo
                }
                onPress={() => {
                  modo === 'light' ? setModo('dark') : setModo('light');
                }}>
                <View
                  style={
                    modo === 'light'
                      ? styles.pressModoIndicator
                      : stylesDark.pressModoIndicator
                  }
                />
              </Pressable>
              <Text
                style={
                  modo === 'light' ? styles.modoTexto : stylesDark.modoTexto
                }>
                Dark
              </Text>
            </View>
          </View>
          <View
            style={modo === 'light' ? styles.pokeList : stylesDark.pokeList}>
            <PokeList />
          </View>
        </View>
      ) : (
        <View style={styles.containerLogin}>
          <Image
            style={styles.imagen}
            source={require('./src/assets/pokeapi_256.png')}
          />
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
                placeholderTextColor="rgba(54,59,129, 0.6)"
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
                placeholderTextColor="rgba(54,59,129, 0.6)"
              />
              <Pressable
                onPress={() => {
                  verClave === false ? setVerClave(true) : setVerClave(false);
                }}
                style={styles.pressablePass}>
                {verClave === true ? (
                  <Text style={styles.pressablePassText}>Ver clave</Text>
                ) : (
                  <Text style={styles.pressablePassText}>Ocultar</Text>
                )}
              </Pressable>
            </View>
            <View style={styles.error}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          </View>
          <View style={styles.pressableContainer}>
            <Pressable style={styles.pressableStyle} onPress={validar}>
              <Text style={styles.textPressable}>Iniciar Sesión</Text>
            </Pressable>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const App = () => {
  return <Screens />;
};

export default App;
