// External Libraries
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

// Services
import api from '../services/api';

function Converter({fromCcy, toCcy}) {
  // States
  const [fromCurrency, setFromCurrency] = useState(fromCcy);
  const [toCurrency, setToCurrency] = useState(toCcy);
  const [amount, setAmount] = useState(0);
  const [convertedValue, setConvertedValue] = useState(0);

  // Functions
  async function convert() {
    let from_to = fromCurrency.toUpperCase() + '_' + toCurrency.toUpperCase();
    const response = await api.get(
      `convert?q=${from_to}&compact=ultra&apiKey=ca15f95f374c652b5f93`,
    );

    let quote = response.data[from_to];
    let result = quote * parseFloat(amount);
    setConvertedValue(result.toFixed(2));

    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      <View style={styles.currencyArea}>
        <Text style={styles.title}>from</Text>

        <TextInput
          placeholder="USD"
          style={styles.currencyInput}
          onChangeText={text => setFromCurrency(text)}
        />

        <Text style={styles.title}>to</Text>

        <TextInput
          placeholder="BRL"
          style={styles.currencyInput}
          onChangeText={text => setToCurrency(text)}
        />
      </View>

      <TextInput
        placeholder="Amount"
        style={styles.inputArea}
        onChangeText={value => setAmount(value)}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.buttonArea} onPress={() => convert()}>
        <Text style={styles.buttonText}>Convert</Text>
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
  currencyArea: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  currencyInput: {
    width: 85,
    height: 40,
    backgroundColor: '#ccc',
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    padding: 0,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
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
