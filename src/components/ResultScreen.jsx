import { motion } from 'framer-motion';
import './ResultScreen.css';

const ResultScreen = ({ score, total, onRestart }) => {
  return (
    <motion.div
      className="result-screen"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ textAlign: 'center', padding: '2rem' }}
    >
      <h2>🎉 ¡Juego Terminado!</h2>
      <p>Tu puntuación fue:</p>
      <h1>{score} / {total}</h1>
      <button
        onClick={onRestart}
        style={{ padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer' }}
      >
        Volver a jugar
      </button>
    </motion.div>
  );
};

export default ResultScreen;
