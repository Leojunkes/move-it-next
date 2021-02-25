import { ChallengesContext } from './ChallengeContexts';

import {
  useEffect,
  Children,
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isactive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}
export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

interface CountdownProviderProps {
  children: ReactNode;
}

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.05 * 60);
  const [isactive, setIsactive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsactive(true);
  }
  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsactive(false);
    setTime(0.05 * 60);
    setHasFinished(false);
  }

  useEffect(() => {
    if (isactive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isactive && time === 0) {
      setHasFinished(true);
      setIsactive(false);
      startNewChallenge();
    }
  }, [isactive, time]);
  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isactive,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
