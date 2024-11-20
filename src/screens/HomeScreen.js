import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { globalStyles } from '../styles/globalStyles';

const HomeScreen = ({ navigation, route }) => {
  const [difficulty, setDifficulty] = useState('easy');
  const { userName } = route.params;

  const startQuiz = () => {
    navigation.navigate('Quiz', { difficulty });
  };

  return (
    <View style={globalStyles.container}>
      <Header title=" Welcome to Math Quiz App" />
      <Text style={globalStyles.greeting}>Hello, {userName}</Text>
      <Text style={globalStyles.title}>Test your math skills!</Text>
      <Text style={globalStyles.title}>Select Difficulty Level</Text>
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <TouchableOpacity
          style={[
            globalStyles.button,
            difficulty === 'easy' && { backgroundColor: '#28a745' },
          ]}
          onPress={() => setDifficulty('easy')}
        >
          <Text style={globalStyles.buttonText}>Easy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            globalStyles.button,
            difficulty === 'medium' && { backgroundColor: '#ffc107' },
          ]}
          onPress={() => setDifficulty('medium')}
        >
          <Text style={globalStyles.buttonText}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            globalStyles.button,
            difficulty === 'hard' && { backgroundColor: '#dc3545' },
          ]}
          onPress={() => setDifficulty('hard')}
        >
          <Text style={globalStyles.buttonText}>Hard</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={globalStyles.button} onPress={startQuiz}>
        <Text style={globalStyles.buttonText}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;






