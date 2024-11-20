import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6D6D6',
    // backgroundColor: '#9EDF9C',
    padding: 20,
  },

  greeting: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    // color: '#007bff',
    marginBottom: 10,
    textAlign: 'left',
  },

  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    margin: 5,

    // backgroundColor: '#007BFF',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     flexGrow: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});




