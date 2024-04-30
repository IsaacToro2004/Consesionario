import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSaveProfile = () => {
    // Aquí puedes implementar la lógica para guardar el perfil
    console.log('Nombre:', name);
    console.log('Correo electrónico:', email);
    console.log('Teléfono:', phone);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Perfil</Text>
      <TextInput
        label="Nombre"
        value={name}
        onChangeText={text => setName(text)}
        style={styles.input}
      />
      <TextInput
        label="Correo electrónico"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        label="Teléfono"
        value={phone}
        onChangeText={text => setPhone(text)}
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={handleSaveProfile}
        style={styles.button}
        color="#f4511e"
      >
        Guardar Perfil
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  input: {
    marginBottom: 20,
    width: '100%',
  },
  button: {
    width: '100%',
  },
});

export default ProfileScreen;
