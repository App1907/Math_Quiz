import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuestionCard = ({ question }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.questionText}>{question}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
  questionText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
});

export default QuestionCard;