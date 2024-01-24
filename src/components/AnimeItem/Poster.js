import styles from '@/styles/VideoPlayer.module.css';

export default function Poster({ anime }) {
  return (
    <div className={styles.poster}>
      <img
        src={anime.coverImage ? anime.coverImage.original : '/img/wpbase.jpg'}
      />
    </div>
  );
}
