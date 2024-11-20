import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/Header';
import { globalStyles } from '../styles/globalStyles';

const ResultScreen = ({ route, navigation }) => {
  const { score, userName } = route.params;
  const [leaderboard, setLeaderboard] = useState([]);


  const saveScore = async () => {
    try {

      const storedScores = await AsyncStorage.getItem('leaderboard');
      const scores = storedScores ? JSON.parse(storedScores) : [];


      const updatedScores = [...scores, score].sort((a, b) => b - a).slice(0, 10);


      await AsyncStorage.setItem('leaderboard', JSON.stringify(updatedScores));
      setLeaderboard(updatedScores);
    } catch (error) {
      console.error('Error saving score:', error);
    }
  };


  const loadLeaderboard = async () => {
    try {
      const storedScores = await AsyncStorage.getItem('leaderboard');
      const scores = storedScores ? JSON.parse(storedScores) : [];
      setLeaderboard(scores);
    } catch (error) {
      console.error('Error loading leaderboard:', error);
    }
  };

  useEffect(() => {
    saveScore();
    loadLeaderboard();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Header title="Quiz Results" />
      <Text style={globalStyles.title}>Quiz Completed!</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 20 }}>
        Your Score: {score}/10
      </Text>

      <Text style={styles.leaderboardTitle}>Leaderboard</Text>
      <FlatList
        data={leaderboard}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.leaderboardItem}>
            <Text style={styles.rank}>#{index + 1}</Text>
            <Text style={styles.score}>{item}/10</Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navigation.navigate('Login',{userName})}
      >
        <Text style={globalStyles.buttonText}>Restart Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  leaderboardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  leaderboardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  rank: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  score: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ResultScreen;






// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import Header from '../components/Header';
// import { globalStyles } from '../styles/globalStyles';

// const ResultScreen = ({ route, navigation }) => {
//   const { score, userName } = route.params;

//   return (
//     <View style={globalStyles.container}>
//       <Header title="Quiz Results" />
//       <Text style={globalStyles.title}>Quiz Completed!</Text>
//       <Text style={globalStyles.title}>Your Score: {score}/10</Text>
//       <TouchableOpacity
//         style={globalStyles.button}
//         onPress={() => navigation.navigate('Login',{userName})}
//       >
//         <Text style={globalStyles.buttonText}>Restart Quiz</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default ResultScreen;