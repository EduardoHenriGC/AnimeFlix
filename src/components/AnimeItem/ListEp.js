import styles from '@/styles/VideoPlayer.module.css';

export default function ListEp({
  anime,
  handleDropdownChange,
  selectedOption,
  dropdownOptions,
  setIndexVideo,
  currentEp,
  setUrlVideo,
  data,
}) {
  return (
    <div className={styles.ep}>
      <label htmlFor="episodeDropdown">Selecione a faixa de episódios:</label>
      <select
        id="episodeDropdown"
        onChange={handleDropdownChange}
        value={selectedOption}
      >
        {dropdownOptions.map((option, index) => (
          <option key={index + 1} value={index + 1}>
            {`Episódios ${option.start}-${option.end}`}
          </option>
        ))}
      </select>
      <p>nº de episódios: {anime?.episodeCount}</p>
      {Array.from(
        {
          length:
            dropdownOptions[selectedOption - 1]?.end -
            dropdownOptions[selectedOption - 1]?.start +
            1,
        },
        (_, index) => {
          const episodeNumber =
            dropdownOptions[selectedOption - 1]?.start + index;
          return (
            <button
              className={styles.btn}
              key={episodeNumber}
              onClick={() => setIndexVideo(episodeNumber)}
            >
              {episodeNumber}
            </button>
          );
        },
      )}
      <div>
        <p>
          Você está assistindo episódio {currentEp} de {anime.slug}
        </p>
        {data.url && (
          <button
            className={styles.btnAudio}
            onClick={() => setUrlVideo(data.url)}
          >
            legendado
          </button>
        )}
        {data.dublado && (
          <button
            className={styles.btnAudio}
            onClick={() => setUrlVideo(data.dublado)}
          >
            dublado
          </button>
        )}
      </div>
    </div>
  );
}
