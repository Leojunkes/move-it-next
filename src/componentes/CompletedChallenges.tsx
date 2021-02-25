import styles from '../styles/components/CompletedChalenge.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContexts';

export function CompletedChalenge() {
  const {challengesCompleted} = useContext(ChallengesContext);

  return (
    <div className={styles.completedChalengeContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
