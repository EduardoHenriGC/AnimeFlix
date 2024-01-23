import styles from '@/styles/VideoPlayer.module.css';

export default function Poster({ anime }) {
  return (
    <div className={styles.poster}>
      <img src={anime.coverImage.large}></img>
    </div>
  );
}
