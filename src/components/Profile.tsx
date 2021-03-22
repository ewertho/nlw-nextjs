import { useContext, useState } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";
import style from "../style/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengeContext);

  return (
    <div className={style.profileContainer}>
      <img src={`https://github.com/ewertho.png`} alt="git profile" />
      <div>
        <strong>ewertho</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
