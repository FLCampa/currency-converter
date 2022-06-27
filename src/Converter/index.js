// External Libraries
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

import api from '../services/api';

// convert?q=USD_PHP,PHP_USD&compact=ultra&apiKey=ca15f95f374c652b5f93
function Converter({mA, mB}) {
  const [moedaA, setMoedaA] = useState(mA);
  const [moedaB, setMoedaB] = useState(mB);
  const [moedaBValor, setMoedaBValor] = useState(0);
  const [convertedValue, setConvertedValue] = useState(0);

  async function converter() {
    let de_para = moedaA + '_' + moedaB;
    const response = await api.get(
      `convert?q=${de_para}&compact=ultra&apiKey=ca15f95f374c652b5f93`,
    );
    let cotacao = response.data[de_para];

    let result = cotacao * parseFloat(moedaBValor);
    setConvertedValue(result.toFixed(2));

    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {moedaA} para {moedaB}
      </Text>

      <TextInput
        placeholder="Valor a ser convertido"
        style={styles.inputArea}
        onChangeText={value => setMoedaBValor(value)}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.buttonArea} onPress={() => converter()}>
        <Text style={styles.buttonText}>Converter</Text>
      </TouchableOpacity>

      <Text style={styles.convertedValue}>
        {convertedValue > 0 && convertedValue}
      </Text>
    </View>
  );
}

// Stylization
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  inputArea: {
    width: 280,
    height: 45,
    backgroundColor: '#ccc',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 20,
    color: 'black',
    borderRadius: 5,
  },
  buttonArea: {
    width: 150,
    height: 45,
    backgroundColor: '#8257e6',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  convertedValue: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 15,
  },
});

export default Converter;
