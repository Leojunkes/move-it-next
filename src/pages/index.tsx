import ExperienceBar from '../componentes/ExperienceBar';
import { Profile } from '../componentes/Profile';
import styles from '../styles/pages/Home.module.css';
import { CompletedChalenge } from '../componentes/CompletedChallenges';
import { Countdown } from '../componentes/Countdown';
import {CountdownProvider} from '../contexts/CoutndownContext';
import Head from 'next/head';
import { ChallengeBox } from '../componentes/ChallengeBox';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move-it</title>
      </Head>
      <ExperienceBar />
      <CountdownProvider>
      <section>
        <div>
          <Profile />
          <CompletedChalenge />
          <Countdown/>
        </div>
        <div>
          <ChallengeBox/>
        </div>
      </section>
      </CountdownProvider>
    </div>
  );
}
