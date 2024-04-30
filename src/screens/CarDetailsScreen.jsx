import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Card, Title } from 'react-native-paper';

const CarDetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Detalles del Automóvil</Title>
      <Card style={styles.card}>
        <Card.Content>
          <Text>Marca: Toyota</Text>
          <Text>Modelo: Corolla</Text>
          <Text>Año: 2023</Text>
          <Text>Color: Blanco</Text>
          <Text>Precio: $25,000</Text>
        </Card.Content>
      </Card>
      <Button title="Volver a la página de inicio" onPress={() => navigation.navigate('Home')} />
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
  card: {
    width: '100%',
    padding: 10,
    marginBottom: 20,
  },
});

export default CarDetailsScreen;