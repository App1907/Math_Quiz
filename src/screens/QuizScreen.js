import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated } from 'react-native';
import Header from '../components/Header';
import QuestionCard from '../components/QuestionCard';
import ScoreBoard from '../components/ScoreBoard';
import Timer from '../components/Timer';
import { generateQuestion } from '../utils/generateQuestion';
import { globalStyles } from '../styles/globalStyles';

const QuizScreen = ({ route, navigation }) => {
  const { difficulty } = route.params;
  const [question, setQuestion] = useState({});
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [resetKey, setResetKey] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    setQuestion(generateQuestion(difficulty));
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    setResetKey((prev) => prev + 1); 
  }, [currentQuestion]);

  useEffect(() => {
    if (currentQuestion > 10) {

      navigation.navigate('Result', { score });
    }
  }, [currentQuestion, score]);

  const handleSubmit = () => {

    if (parseFloat(userAnswer) === question.answer) {
      setScore((prev) => prev + 1);
    }
    goToNextQuestion();
  };

  const handleTimeUp = () => {
    goToNextQuestion();
  };

  const goToNextQuestion = () => {
    if (currentQuestion < 10) {
      setCurrentQuestion((prev) => prev + 1);
      setUserAnswer('');
      fadeAnim.setValue(0); 
    } else {
      setCurrentQuestion((prev) => prev + 1); 
    }
  };

  return (
    <View style={globalStyles.container}>
      <Header title="Math Quiz" />
      <ScoreBoard
        currentQuestion={currentQuestion > 10 ? 10 : currentQuestion}
        totalQuestions={10}
        score={score}
      />
      {currentQuestion <= 10 && (
        <>
          <Timer duration={20} resetKey={resetKey} onTimeUp={handleTimeUp} />
          <Animated.View style={{ opacity: fadeAnim }}>
            <QuestionCard question={question.question} />
          </Animated.View>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: '#000',
              padding: 10,
              width: '80%',
              marginBottom: 20,
            }}
            keyboardType="numeric"
            value={userAnswer}
            onChangeText={setUserAnswer}
            placeholder="Enter your answer"
          />
          <TouchableOpacity style={globalStyles.button} onPress={handleSubmit}>
            <Text style={globalStyles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default QuizScreen;







