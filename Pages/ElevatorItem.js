import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ElevatorItem(props) {
  return (
    <View style={styles.container}>
        <Text style={styles.serialNumber}>{props.serialNumber}</Text>
        <Text style={styles.model}>{props.model}</Text>
        <View style={styles.icon}></View>
        {/* <Text>{props.status}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        backgroundColor: '#F2F2F2',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOpacity: 0.8,
        elevation: 2,
        shadowRadius: 10,
        shadowOffset : { width: 1, height: 5},
    },
    serialNumber: {
        fontSize: 17,
        fontWeight: '500'
    },
    model: {
        fontSize: 17,
    },
    icon: {
        width: 20,
        height: 20,
        backgroundColor: 'red',
        borderRadius: 50,
        shadowColor: 'rgba(250, 10, 4, 1)',
        shadowOpacity: 1.1,
        elevation: 1,
        shadowRadius: 10,
        shadowOffset : { width: 1, height: 1},
    }
});
