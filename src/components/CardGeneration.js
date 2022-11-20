import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default props = ({ object, index, navigation, text }) => {
    return (
        <TouchableOpacity style={styles.Container} onPress={() => 
            navigation.navigate('Generation', {index: index+1, title: text})
        }>
            <Text style={styles.Text}>Geração {text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: 100,
        backgroundColor: '#FFD700',
        borderWidth: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Text: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});