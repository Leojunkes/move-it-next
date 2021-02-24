import ExperienceBar from '../componentes/ExperienceBar';
import { Profile } from '../componentes/Profile';
import styles from '../styles/pages/Home.module.css';
import { CompletedChalenge } from '../componentes/CompletedChallenges';
import { Countdown } from '../componentes/Countdown';

import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move-it</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChalenge />
          <Countdown/>
        </div>
      </section>
    </div>
  );
}
