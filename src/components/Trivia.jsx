import { useState } from 'react';
import QuestionCard from './QuestionCard';

const Trivia = ({ questions, onFinish }) => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    const nextScore = isCorrect ? score + 1 : score;
    setScore(nextScore);

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(prev => prev + 1);
      } else {
        onFinish(nextScore);
      }
    }, 1000);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <QuestionCard
        data={questions[current]}
        questionIndex={current + 1}
        totalQuestions={questions.length}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Trivia;
