import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScoreBoard = ({ currentQuestion, totalQuestions, score }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Score: {score}  </Text>
      <Text style={styles.text}>
        Question: {currentQuestion}/{totalQuestions}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
  },
});

export default ScoreBoard;