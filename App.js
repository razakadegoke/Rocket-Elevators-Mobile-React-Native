import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ElevatorByIdPage from './Pages/ElevatorByIdPage';
import LoginPage from './Pages/LoginPage';
import ElevatorListPage from './Pages/ElevatorListPage';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  
  //On click verify user authentification
  const [isConnect, setIsConnect] = useState(false) 

  return (
    <NavigationContainer>
      <Stack.Navigator >
        {
          isConnect == false ? ( 
              <>
                <Stack.Screen name="Home" options={{headerShown: false}}>
                  {(props) => <LoginPage {...props} setIsConnect={setIsConnect} />}
                </Stack.Screen>
              </>
            ) : ( 
              <>
                 <Stack.Screen name="ElevatorListPage" options={{headerShown: false}}>
                  {(props) => <ElevatorListPage {...props} setIsConnect={setIsConnect}  />}
                </Stack.Screen>
                <Stack.Screen name="ElevatorByIdPage" component={ElevatorByIdPage}/>
              </>
            )
        }
      </Stack.Navigator>
  </NavigationContainer>
  );
}
