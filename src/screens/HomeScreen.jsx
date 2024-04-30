import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>¡Bienvenido al Concesionario de Autos!</Title>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Últimos Modelos</Title>
          <Paragraph style={styles.cardText}>Explora nuestra colección de los últimos modelos de automóviles.</Paragraph>
          <Button title="Ver detalles del auto" onPress={() => navigation.navigate('CarDetails')} />
        </Card.Content>
      </Card>
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
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    width: '100%',
    padding: 10,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardText: {
    marginBottom: 10,
  },
});

export default HomeScreen;
