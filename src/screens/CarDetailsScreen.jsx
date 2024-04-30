import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CarDetailsScreen = ({ route }) => {
  const { vehicle } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles del Automóvil</Text>
      <Text style={styles.text}>Marca: {vehicle.brand}</Text>
      <Text style={styles.text}>Modelo: {vehicle.model}</Text>
      <Text style={styles.text}>Año: {vehicle.year}</Text>
      <Text style={styles.text}>Color: {vehicle.color}</Text>
      <Text style={styles.text}>Precio: ${vehicle.price}</Text>
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
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666666', // Color de texto gris
  },
});

export default CarDetailsScreen;
