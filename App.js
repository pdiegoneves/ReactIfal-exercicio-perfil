import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Card from './src/components/card/card.component'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function App() {
  const [userName, setUserName] = useState('pdiegoneves')
  const [name, setName] = useState('')
  const [avatar_url, setAvatar_url] = useState('')
  const [html_url, setHtml_url] = useState('')
  const [bio, setBio] = useState('')
  const [blog, setBlog] = useState('')
  const [email, setEmail] = useState('')
  const [followers, setFollowers] = useState('')
  const [following, setFollowing] = useState('')
  const [location, setLocation] = useState('')
  const [respos_url, setRepos_url] = useState('')
  const [repositories, setRepositories] = useState([])

  // getRemoteUser(userName)
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${userName}`)
      .then((res) => {
        setName(res.data.name)
        setAvatar_url(res.data.avatar_url)
        setHtml_url(res.data.html_url)
        setBio(res.data.bio)
        setBlog(res.data.blog)
        setEmail(res.data.email)
        setFollowers(res.data.followers)
        setFollowing(res.data.following)
        setLocation(res.data.location)
        setRepos_url(res.data.repos_url)
      })
  }, [userName])

  useEffect(() => {
    axios.get(respos_url).then(res => setRepositories(res.data))
  }, [respos_url])

  const handleUserName = (e) => {
    setUserName(e.nativeEvent.text)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        placeholder={userName}
        onEndEditing={handleUserName}
      />
      <Card
        name={name}
        avatar_url={avatar_url}
        html_url={html_url}
        bio={bio}
        blog={blog}
        email={email}
        followers={followers}
        following={following}
        location={location}
        repositories={repositories}
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
    marginTop: 30,
    height: 40,
    width: '70%',
    borderColor: 'gray',
    backgroundColor: '#fff',
  },
})
