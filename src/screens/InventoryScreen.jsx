import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const InventoryScreen = ({ navigation }) => {
  const vehicles = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
      year: 2023,
      color: 'Blanco',
      price: 25000,
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
      year: 2022,
      color: 'Gris',
      price: 23000,
    },
    {
      id: 3,
      brand: 'Ford',
      model: 'Mustang',
      year: 2021,
      color: 'Rojo',
      price: 35000,
    },
    {
      id: 4,
      brand: 'Chevrolet',
      model: 'Camaro',
      year: 2020,
      color: 'Negro',
      price: 40000,
    },
  ];

  const handleViewDetails = (vehicle) => {
    navigation.navigate('CarDetails', { vehicle });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventario de Autos</Text>
      {vehicles.map(vehicle => (
        <View key={vehicle.id} style={styles.vehicleContainer}>
          <Text>{vehicle.brand} {vehicle.model}</Text>
          <Button
            title="Ver detalles"
            onPress={() => handleViewDetails(vehicle)}
            color="#f4511e"
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
  },
  vehicleContainer: {
    marginBottom: 20,
  },
});

export default InventoryScreen;
