import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Card from './src/components/card/card.component'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-web'

export default function App() {
  const [cep, setCep] = useState('57000000')
  const [endereco, setEndereco] = useState({})


  useEffect(() => {
    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => {
       setEndereco(res.data)
        console.log(endereco)
      })
  }, [cep])

  const handleCep = (e) => {
    setCep(e.nativeEvent.text)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Buscar CEP</Text>
      <TextInput
        style={styles.input}
        placeholder={cep}
        onEndEditing={handleCep}
      />
      <Card
        bairro={endereco.bairro}
        complemento={endereco.complemento}
        logradouro={endereco.logradouro}
        cidade={endereco.localidade}
        uf={endereco.uf}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '70%',
    borderColor: 'gray',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',

  }
})
