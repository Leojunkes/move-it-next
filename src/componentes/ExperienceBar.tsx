import styles from '../styles/components/ExperienceBar.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContexts';

export default function ExperienceBar() {
  const { currentExperience, experienceTonextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceTonextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceTonextLevel} xp</span>
    </header>
  );
}
