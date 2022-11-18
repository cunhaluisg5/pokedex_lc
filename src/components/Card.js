import { View, Text, StyleSheet } from 'react-native';

export default props = ({ object }) => {
    return (
        <View style={styles.Container}>
            <Text style={styles.Text}>{object.name}</Text>
            <Text style={styles.Text}>{object.total}</Text>
        </View>
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