import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido al Concesionario Autos Ya!</Text>
      <Button
        title="Ver Inventario"
        onPress={() => navigation.navigate('Inventory')}
        color="#f4511e" // Color de botón naranja
      />
      <Button
        title="Ver Perfil"
        onPress={() => navigation.navigate('Profile')}
        color="#f4511e" // Color de botón naranja
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff', // Color de fondo blanco
  },
  title: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333', // Color de texto oscuro
  },
});

export default HomeScreen;
