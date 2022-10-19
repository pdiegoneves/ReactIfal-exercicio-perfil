import { Image, StyleSheet, View } from 'react-native'

export default function Avatar(props) {
    return (
        <View style={styles.avatarArea}>
            <Image style={styles.avatar}
                source={{ uri: props.uri }} />
        </View>
    )
}

const styles = StyleSheet.create({
    avatarArea: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    avatar: {
        width: 300,
        height: 300,
        borderRadius: 150,

    }
})