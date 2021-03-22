import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChallengeContext } from "./ChallengeContext";

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinish: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengeContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsactive] = useState(false);
  const [hasFinish, setHasFinish] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinish(true);
      setIsactive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  function startCountdown() {
    setIsactive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsactive(false);
    setHasFinish(false);
    setTime(0.1 * 60);
  }
  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinish,
        isActive,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
