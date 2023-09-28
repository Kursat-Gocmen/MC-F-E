import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {

  return (
    <View style={styles.container}>
      <Text style={styles.bigX}>X</Text>
      <TextInput
        style={styles.input}
        placeholder="Gebruikersnaam"
      />
      <TextInput
        style={styles.input}
        placeholder="Wachtwoord"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigX: {
    fontSize: 100,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    top: 150, 
  },
  input: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

