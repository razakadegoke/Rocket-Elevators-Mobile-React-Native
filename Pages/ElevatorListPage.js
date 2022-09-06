import { View, Text, StyleSheet, Button, ScrollView,TouchableOpacity, ViewComponent } from 'react-native';
import { useEffect, useState } from 'react';
import ElevatorItem from './ElevatorItem';

export default function ElevatorListPage(props) {
    const [elevatorList, setElevatorList ] = useState([]);

    const getElevatorList = async () => {
        try {
            const response = await fetch('https://rocketelevators-api.azurewebsites.net/api/Elevator');
            const json = await response.json();
            setElevatorList(json);
        } catch (error) {
            console.error(error);
        }
    }  

    useEffect(() => {
        getElevatorList();
    }, [elevatorList]);

    const listItems = elevatorList.map((elevator) =>
        <TouchableOpacity onPress={() => props.navigation.navigate('ElevatorByIdPage',{
            id: elevator.id,
            serialNumber: elevator.serialNumber,
            model: elevator.model,
            status: elevator.status
            })}>
            <ElevatorItem 
            serialNumber={elevator.serialNumber} 
            model={elevator.model} 
            status={elevator.status} 
            />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Elevators</Text>
                {listItems}
            </ScrollView>
            <TouchableOpacity style={styles.bottom} onPress={() => props.setIsConnect(false)}>
                <Text style={styles.bottom_text}>Log Out</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white"
    },
    title_info: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        marginTop: 70,
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 20,
        marginHorizontal: 20,
    },
    bottom: {
        alignItems: "center",
        paddingVertical: 20,
        backgroundColor: '#D91A3D'
    },
    bottom_text: {
        color: "white",
        fontSize: 25,
        fontWeight: "600"
    }
});
