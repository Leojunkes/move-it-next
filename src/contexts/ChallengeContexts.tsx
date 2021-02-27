import { createContext, ReactNode, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';
import { LevelUpModal } from '../componentes/LevelUpModal';

interface challenge {
  type: 'body | eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  startNewChallenge: () => void;
  level: number;
  levelUp: () => void;
  currentExperience: number;
  challengesCompleted: Number;
  activeChallenge: challenge;
  resetChallenge: () => void;
  experienceTonextLevel: number;
  completeChallenge: () => void;
  closeLevelUpmodal: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({
  children,
  ...rest
}: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  );
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0
  );

  const [islevelUp, setIslevelUp] = useState(false);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceTonextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIslevelUp(true);
  }

  function closeLevelUpmodal() {
    setIslevelUp(false);
  }

  function startNewChallenge() {
    const randomChallenges = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallenges];
    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount}xp!`,
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }
    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceTonextLevel) {
      finalExperience = finalExperience - experienceTonextLevel;
      levelUp();
    }
    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return (
    <ChallengesContext.Provider
      value={{
        startNewChallenge,
        level,
        levelUp,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        resetChallenge,
        experienceTonextLevel,
        completeChallenge,
        closeLevelUpmodal,
      }}
    >
      {children}
      {islevelUp && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
}
