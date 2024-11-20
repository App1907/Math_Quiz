import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { globalStyles } from '../styles/globalStyles';

const ResultScreen = ({ route, navigation }) => {
  const { score, userName } = route.params;

  return (
    <View style={globalStyles.container}>
      <Header title="Quiz Results" />
      <Text style={globalStyles.title}>Quiz Completed!</Text>
      <Text style={globalStyles.title}>Your Score: {score}/10</Text>
      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navigation.navigate('Login',{userName})}
      >
        <Text style={globalStyles.buttonText}>Restart Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultScreen;