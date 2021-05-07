import styles from '../styles/components/Profile.module.css';
import { ChallengesContext } from '../contexts/ChallengeContexts';
import { useContext } from 'react';

import { session, useSession } from 'next-auth/client';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const [session] = useSession();
  console.log(session)

  return (
    <div className={styles.profileContainer}>
      <img src={session.user.image} alt="Leo" />
      <div>
        <p style={{ fontWeight: 600, fontSize: '1.5rem' }}>
          {session.user.name}
        </p>

        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
