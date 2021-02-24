import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/61796216?s=460&u=ee131e83cc8eb8a1bd3570471962a8b8e2782a23&v=4"
        alt="Leonardo Junkes"
      />
      <div>
        <strong>Leonardo Junkes</strong>

        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
