import { useContext, useState, useEffect } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";
import style from "../style/components/Profile.module.css";
import styles from "../style/components/LevelUpModal.module.css";
import Cookies from "js-cookie";

export function Profile() {
  const [name, setName] = useState("");
  const [gitName, setGitName] = useState(null);

  const { level } = useContext(ChallengeContext);

  function handleSubmit() {
    setGitName(name);
  }

  gitName !== null && Cookies.set("gitname", gitName);

  useEffect(() => {
    if (Cookies.get("gitname") !== undefined) {
      setGitName(Cookies.get("gitname"));
    }
  }, []);

  return (
    <>
      {gitName === null && (
        <div>
          <div className={styles.overlay}>
            <div className={styles.container}>
              <strong>Github name:</strong>
              <input
                type="text"
                id="gitinput"
                onChange={(e) => setName(e.target.value)}
              />
              <button className={styles.btnprofile} onClick={handleSubmit}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}
      <div className={style.profileContainer}>
        <img src={`https://github.com/${gitName}.png`} alt="git profile" />
        <div>
          <strong>{gitName}</strong>
          <p>
            <img src="icons/level.svg" alt="level" />
            Level {level}
          </p>
        </div>
      </div>
    </>
  );
}
