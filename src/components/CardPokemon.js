import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

export default props = ({ object, index, navigation, text, url, image }) => {
    return (
        <TouchableOpacity style={styles.Container} onPress={() =>
            navigation.navigate('')
        }>
            <Image
                style={styles.Image}
                source={{
                    uri: image
                }}
            />
            <Text style={styles.Text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        width: '100%',
        height: 100,
        backgroundColor: '#DCDCDC',
        borderWidth: 1,
        padding: 10,
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5
    },
    Text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    Image: {
        width: 80,
        height: 80,
        marginLeft: 30,
        marginRight: 10,
        resizeMode: 'center'
    }
});