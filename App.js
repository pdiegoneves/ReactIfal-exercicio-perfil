import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Card from './src/components/card/card.component'
import axios from 'axios'
import { useState } from 'react'

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


  getRemoteUser(userName)

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
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

  function getRemoteUser(userName) {
    axios.get(`https://api.github.com/users/${userName}`).then((res) => {
      setName(res.data.name)
      setAvatar_url(res.data.avatar_url)
      setHtml_url(res.data.html_url)
      setBio(res.data.bio)
      setBlog(res.data.blog)
      setEmail(res.data.email)
      setFollowers(res.data.followers)
      setFollowing(res.data.following)
      setLocation(res.data.location)
      setRepos_url(`${res.data.repos_url}?perpage=10`)
    })
    
    axios.get(respos_url)
      .then(res => {
        setRepositories([
          { id: res.data[0].id, name: res.data[0].name },
          { id: res.data[1].id, name: res.data[1].name },
          { id: res.data[2].id, name: res.data[3].name }
        ])
      })
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
