import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

export default props = ({ object }) => {
    const text = `Clicou na ${object.name}`;
    return (
        <TouchableOpacity style={styles.Container} onPress={() => 
            Alert.alert(text)
        }>
            <Text style={styles.Text}>{object.name}</Text>
            <Text style={styles.Text}>{object.total}</Text>
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