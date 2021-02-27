import ExperienceBar from '../componentes/ExperienceBar';
import { GetServerSideProps } from 'next';
import { ChallengesProvider } from '../contexts/ChallengeContexts';
import { Profile } from '../componentes/Profile';
import styles from '../styles/pages/Home.module.css';
import { CompletedChalenge } from '../componentes/CompletedChallenges';
import { Countdown } from '../componentes/Countdown';
import { CountdownProvider } from '../contexts/CoutndownContext';
import Head from 'next/head';
import { ChallengeBox } from '../componentes/ChallengeBox';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props:HomeProps) {
  
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
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
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
