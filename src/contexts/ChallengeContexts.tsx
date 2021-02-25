import { createContext, ReactNode, useState, useEffect } from 'react';
import challenges from '../../challenges.json';

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
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceTonextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallenges = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallenges];
    setActiveChallenge(challenge);

    if(Notification.permission === 'granted'){
      new Notification('Novo desafio 🎉',{
        body:`Valendo ${challenge.amount}xp!`
      })
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
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
