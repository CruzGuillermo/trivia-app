import { useState } from 'react';
import StartScreen from './components/StartScreen';
import Trivia from './components/Trivia';
import ResultScreen from './components/ResultScreen';
import Navbar from './components/Navbar';
import { questions } from './data/questions';

function App() {
  const [step, setStep] = useState('start'); // start, playing, result
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState(null);

  const handleStart = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    setStep('playing');
  };

  const handleFinish = (finalScore) => {
    setScore(finalScore);
    setStep('result');
  };

  const filteredQuestions = difficulty
    ? questions.filter((q) => q.difficulty === difficulty)
    : [];

  return (
    <div
      style={{
        backgroundColor: 'var(--bg)',
        minHeight: '100vh',
        color: 'var(--text)',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
    >
      <Navbar />
      {step === 'start' && <StartScreen onStart={handleStart} />}
      {step === 'playing' && (
        <Trivia questions={filteredQuestions} onFinish={handleFinish} />
      )}
      {step === 'result' && (
        <ResultScreen
          score={score}
          total={filteredQuestions.length}
          onRestart={() => {
            setScore(0);
            setDifficulty(null);
            setStep('start');
          }}
        />
      )}
    </div>
  );
}

export default App;
