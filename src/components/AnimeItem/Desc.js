import styles from '@/styles/VideoPlayer.module.css';

export default function Desc({ anime, status }) {
  return (
    <div className={styles.desc}>
      <img className={styles.posterImage} src={anime.posterImage.small}></img>

      <h1>
        {anime?.titles.en || anime?.titles.en_jp || 'Título não disponível'}
      </h1>
      <p className={status ? styles.statusOn : styles.statusOff}>
        {status ? 'Disponível' : 'Indisponível'}
      </p>
      <p>{anime?.synopsis}</p>
    </div>
  );
}
