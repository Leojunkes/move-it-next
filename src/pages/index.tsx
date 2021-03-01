import React,{useState} from 'react';
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
import Header from '../componentes/Header/HeaderTheme';

import {ThemeProvider} from 'styled-components';


import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props:HomeProps) {
  

  const toogleTheme = ()=>{
    
  }
  
  return (
    <ThemeProvider theme={light}>
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move-it</title>
        </Head>
        <Header toggleTheme={toogleTheme} />
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
    </ThemeProvider>
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
