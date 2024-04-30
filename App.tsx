import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importa tus componentes de pantalla aquí
import HomeScreen from './src/screens/HomeScreen';
import CarDetailsScreen from './src/screens/CarDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
        <Stack.Screen name="CarDetails" component={CarDetailsScreen} options={{ title: 'Detalles del Automóvil' }} />
        {/* Agrega más pantallas aquí según sea necesario */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;