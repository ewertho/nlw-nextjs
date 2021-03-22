import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";
import styles from "../style/components/LevelUpModal.module.css";

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengeContext);

  return (
    <div>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <header>{level}</header>
          <strong>Parabens</strong>
          <p>Você alcançou um novo level.</p>
          <button type="button" onClick={closeLevelUpModal}>
            <img src="/icons/close.svg" alt="fechar modal" />
          </button>
        </div>
      </div>
    </div>
  );
}
