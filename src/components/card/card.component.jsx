import {
  FlatList,
  ScrollView,
  Text,
  StyleSheet,
  View,
  TextInput,
  SafeAreaView,
} from 'react-native'
import Avatar from '../avatar/avatar.component'

export default function Card(props) {

  return (
    <View style={styles.card}>
      <ScrollView>
        <Avatar uri={props.avatar_url} />
        <View style={styles.info}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.name}>{props.html_url}</Text>
          <View style={styles.maisInfo}>
            <Text>Bio: { props.bio }</Text>
            <Text>Blog: { props.blog }</Text>
            <Text>E-mail: { props.email }</Text>
            <Text>Seguidores: {props.followers} | Seguindo: { props.following }</Text>
            <Text>{ props.location }</Text>
          </View>
        </View>
      </ScrollView>
      <FlatList style={ styles.repoList }
          data={ props.repositories }
          renderItem={({ item }) => <Repository
          data={item} />}
          />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    minWidth: '90%',
    minHeight: 400,
    backgroundColor: '#ddd',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    margin: 25,
    borderRadius: 50,
  },
  input: {
    height: 40,
    margin: 30,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
  },
  areaInput: {
    margin: 20,
    borderRadius: 15,
    backgroundColor: '#999',
  },
  info: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  name: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
  },
  maisInfo: {
    alignItems: 'flex-start',
    marginTop: 15,
  },
  repoList: {
    backgroundColor: '#333333',
    paddingLeft: 40,
    maxHeight: 200
  },
  repo: {
    color: '#fff',
  }
})

function Repository(props) {
  return (
    <View>
      <Text style={styles.repo}>-> {props.data.name}</Text>
    </View>
  )
}