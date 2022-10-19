import {
  FlatList,
  ScrollView,
  Text,
  StyleSheet,
  View,
  TextInput,
  SafeAreaView,
} from 'react-native'
import axios from 'axios'
import { useState } from 'react'
import Avatar from '../avatar/avatar.component'

export default function Card() {
  const [userName, setUserName] = useState('pdiegoneves')

  const [avatar_url, setAvatar_url] = useState('')
  const [bio, setBio] = useState('')
  const [blog, setBlog] = useState('')
  const [email, setEmail] = useState('')
  const [followers, setFollowers] = useState('')
  const [following, setFollowing] = useState('')
  const [html_url, setHtml_url] = useState('')
  const [id, setId] = useState('')
  const [location, setLocation] = useState('')
  const [name, setName] = useState('')
  const [repos_url, setRepos_url] = useState('')
  const [repos, setRepos] = useState([{name: '', description: ''}])

  const baseURL = `https://api.github.com/users/${userName}`
  axios.get(baseURL).then((res) => {
    setAvatar_url(res.data.avatar_url)
    setBio(res.data.bio)
    setBlog(res.data.blog)
    setEmail(res.data.email)
    setFollowers(res.data.followers)
    setFollowing(res.data.following)
    setHtml_url(res.data.html_url)
    setId(res.data.id)
    setLocation(res.data.location)
    setName(res.data.name)
    setRepos_url(res.data.repos_url + '?per_page=10')
    // axios.get(repos_url).then(res => {
    //   res.data.forEach(repo => {
    //     setRepos([...repos, { name: repo.name, description: repo.description }])
    //     console.log(repo)
    //   }

    //   )
    // })
  })
  return (
    <View style={styles.card}>
      <ScrollView>
        <Avatar uri={avatar_url} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.name}>{html_url}</Text>
          <View style={styles.maisInfo}>
            <Text>Bio: { bio }</Text>
            <Text>Blog: { blog }</Text>
            <Text>E-mail: { email }</Text>
            <Text>Seguidores: {followers} | Seguindo: { following }</Text>
            <Text>{ location }</Text>
          </View>
        </View>
        <FlatList
          data={repos}
          renderItem={ ({item}) => <Repository data={item} />}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    minWidth: '90%',
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
  }
})

function Repository(props) {
  return (
    <View>
      <Text>{props.name}</Text>
      <Text>{props.description}</Text>
    </View>
  )
}