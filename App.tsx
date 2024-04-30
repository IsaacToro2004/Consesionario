import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importa tus componentes de pantalla aquí
import HomeScreen from './src/screens/HomeScreen';
import CarDetailsScreen from './src/screens/CarDetailsScreen';
import InventoryScreen from './src/screens/InventoryScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
        <Stack.Screen name="CarDetails" component={CarDetailsScreen} options={{ title: 'Detalles del Automóvil' }} />
        <Stack.Screen name="Inventory" component={InventoryScreen} options={{ title: 'Inventario de Autos' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil del Usuario' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
