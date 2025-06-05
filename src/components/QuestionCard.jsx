import { useState, useEffect } from 'react';
import "./QuestionCard.css"
const QuestionCard = ({ data, questionIndex, totalQuestions, onAnswer }) => {
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);

  const handleClick = (index) => {
    if (answered) return;

    setSelected(index);
    setAnswered(true);

    const isCorrect = index === data.correctIndex;
    onAnswer(isCorrect);
  };

  useEffect(() => {
    setSelected(null);
    setAnswered(false);
  }, [data]);

  return (
    <div className="question-card">
      <div className="question-header">
        <h2>Pregunta {questionIndex} de {totalQuestions}</h2>
        <p>{data.question}</p>
      </div>
      <div className="options">
        {data.options.map((option, i) => {
          let className = "option";

          if (answered) {
            if (i === data.correctIndex) className += " correct";
            else if (i === selected) className += " wrong";
          }

          return (
            <button
              key={i}
              className={className}
              onClick={() => handleClick(i)}
              disabled={answered}
              type="button"
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
