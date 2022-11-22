import {
  FlatList,
  ScrollView,
  Text,
  StyleSheet,
  View,
  TextInput,
  SafeAreaView,
} from 'react-native'

export default function Card(props) {

  return (
    <View style={styles.card}>
      <ScrollView>
        <View style={styles.info}>
          <Text style={styles.texto}>Logradouro:</Text><Text> {props.logradouro}</Text>
          <Text style={styles.texto}>Complemento:</Text><Text> {props.complemento}</Text>
          <Text style={styles.texto}>Bairro:</Text><Text> {props.bairro}</Text>
          <Text style={styles.texto}>Cidade:</Text><Text>{props.cidade}</Text>
          <Text style={styles.texto}>UF:</Text><Text> {props.uf}</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    minWidth: '90%',
    height: '50%',
    backgroundColor: '#ddd',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 25,
    borderRadius: 50,
    paddingTop: 20,
    paddingLeft: 20,
  },
  texto: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})
