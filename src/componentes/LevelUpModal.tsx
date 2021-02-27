import styles from '../styles/components/LevelUpModal.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContexts';

export function LevelUpModal() {
  const {level, closeLevelUpmodal} = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo Level.</p>

        <button type="button" onClick={closeLevelUpmodal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
    </div>
  );
}
