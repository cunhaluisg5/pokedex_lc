import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

export default props = ({ object, index }) => {
    const text = object.name.replace('original-', '').toUpperCase();
    const message = `Clicou na Geração ${text}`;
    return (
        <TouchableOpacity style={styles.Container} onPress={() => 
            Alert.alert(message)
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