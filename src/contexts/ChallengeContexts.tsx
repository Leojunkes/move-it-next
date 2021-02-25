import { createContext, ReactNode, useState } from 'react';
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
  resetChallenge:()=>void;
  experienceTonextLevel:number;
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

  const experienceTonextLevel = Math.pow((level + 1)*4, 2)
  
  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallenges = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallenges];
    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
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
        
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
