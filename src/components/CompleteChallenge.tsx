import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";
import styles from "../style/components/CompleteChallenge.module.css";

export function CompleteChallenge() {
  const { challengeCompleted } = useContext(ChallengeContext);

  return (
    <div className={styles.completeChallengeContainer}>
      <span>Desafios Completos</span>
      <span>{challengeCompleted}</span>
    </div>
  );
}
