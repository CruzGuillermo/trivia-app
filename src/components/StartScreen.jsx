import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './StartScreen.css';

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.5, ease: 'easeOut' },
  }),
};

const frases = [
  "¡Demuestra lo que sabes!",
  "¡Reta tu mente!",
  "¿Preparado para el desafío?",
  "Cada acierto te acerca a la gloria!",
  "¡Tu cerebro es el límite!",
];

const StartScreen = ({ onStart }) => {
  const [difficulty, setDifficulty] = useState('easy');
  const [frase, setFrase] = useState('');
  const controls = useAnimation();
  const clickedRef = useRef(false);
  const clickSound = useRef(new Audio('https://www.soundjay.com/buttons/sounds/button-16.mp3'));

  useEffect(() => {
    const randomFrase = frases[Math.floor(Math.random() * frases.length)];
    setFrase(randomFrase);
  }, []);

  const handleStartClick = async () => {
    if (clickedRef.current) return;
    clickedRef.current = true;

    clickSound.current.play();

    await controls.start({
      opacity: 0,
      y: -100,
      transition: { duration: 0.5, ease: 'easeInOut' },
    });

    onStart(difficulty);
  };

  return (
    <motion.div
      className="start-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      role="main"
      aria-label="Pantalla de inicio de trivia"
    >
      <motion.h1 variants={textVariants} custom={0}>
        🧠 Trivia Rápida
      </motion.h1>

      <motion.p
        variants={textVariants}
        custom={1}
        className="frase-motivadora"
        aria-live="polite"
      >
        {frase}
      </motion.p>

      <motion.label
        htmlFor="difficulty"
        variants={textVariants}
        custom={2}
        className="difficulty-label"
      >
        Selecciona dificultad 🎯
      </motion.label>

      <motion.select
        id="difficulty"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        className="difficulty-select"
        variants={textVariants}
        custom={3}
        aria-label="Seleccionar dificultad"
      >
        <option value="easy">🟢 Fácil</option>
        <option value="medium">🟡 Medio</option>
        <option value="hard">🔴 Difícil</option>
      </motion.select>

      <motion.button
        onClick={handleStartClick}
        className="start-button"
        variants={textVariants}
        custom={4}
        whileHover={{ scale: 1.1, backgroundColor: '#c4b5fd', color: '#4c1d95' }}
        whileTap={{ scale: 0.95 }}
        animate={controls}
      >
        ¡Comenzar! 🎉
      </motion.button>
    </motion.div>
  );
};

export default StartScreen;
