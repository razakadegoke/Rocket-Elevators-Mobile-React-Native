import { View, Text, StyleSheet, Button } from 'react-native';
import { useState, useEffect} from 'react';
import ElevatorListPage from './ElevatorListPage';

export default function ElevatorByIdPage(props) {
    const { id, model, serialNumber, status } = props.route.params;
    const [ res , setRes] = useState(0)

    const updateElevatorStatus = async () => {
        try {
            const response = await fetch(`https://rocketelevators-api.azurewebsites.net/api/Elevator/${id}/Active`, {
                method: 'PUT'
            });
            setRes(response.status)
            console.log(res)
        } catch (error) {
            console.error(error);
        }
    }

    // useEffect(() => {
    //     updateElevatorStatus()
    // }, []);
 
    return (
        <View style={styles.container}>
            <Text>Elevator</Text>
            <Text>Serial Number : {serialNumber}</Text>
            <Text>Model : {model}</Text>
            <Text>Status : {status}</Text>
            <Button onPress={() =>
            {
                updateElevatorStatus()
                props.navigation.navigate("ElevatorListPage")
            }
            } title="Complete"/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
