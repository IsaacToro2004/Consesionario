import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InventoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventario de Autos</Text>
      <Text style={styles.text}>Ver todos los autos disponibles en el concesionario.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
  },
});

export default InventoryScreen;
