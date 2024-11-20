import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Timer = ({ duration, onTimeUp, resetKey }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration); 
  }, [resetKey]);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp(); 
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); 
  }, [timeLeft]);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, timeLeft <= 5 && { color: 'red' }]}>
        Time Left: {timeLeft}s
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
  },
});

export default Timer;

