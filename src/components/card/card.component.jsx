import { FlatList, ScrollView, Text, StyleSheet, View, TextInput, SafeAreaView } from 'react-native'

export default function Card() {
  return (
    <View style={styles.card}>
    <ScrollView >
      <SafeAreaView style={styles.areaInput}>
        <TextInput
        style={styles.input}
        />
      </SafeAreaView>
      </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
  card: {
    minWidth: '90%',
    backgroundColor: '#ddd',
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    margin: 25,
    borderRadius: 50
  },
  input: {
    height: 40,
    margin: 30,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15*
  },
  areaInput: {
    backgroundColor: 'blue'
  }
})