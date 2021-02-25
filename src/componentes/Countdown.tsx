import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const [time, setTime] = useState(0.05 * 60);
  const [isactive, setIsactive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsactive(true);
  }
  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsactive(false);
    setTime(25 * 60);
  }

  useEffect(() => {
    if (isactive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isactive && time === 0) {
      setHasFinished(true);
      setIsactive(false);
    }
  }, [isactive, time]);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo Terminado
        </button>
      ):(
        <>
          {isactive ? (
        <button
          onClick={resetCountdown}
          type="button"
          className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
        >
          Abandonar ciclo
        </button>
      ) : (
        <button
          onClick={startCountdown}
          type="button"
          className={styles.countdownButton}
        >
          Iniciar ciclo
        </button>
      )}
        </>
      )}

      
    </div>
  );
}
