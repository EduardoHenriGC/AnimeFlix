// AnimeList.js
'use client';
import { useEffect, useState, useRef } from 'react';
import styles from '@/styles/AnimeList.module.css';
import Link from 'next/link';

const AnimeList = ({ category }) => {
  const [animes, setAnimes] = useState([]);
  const listRef = useRef(null);

  useEffect(() => {
    const getAnimesByCategory = async () => {
      try {
        const apiUrl = `https://kitsu.io/api/edge/anime?sort=${category}&page[limit]=20&page[offset]=0`;
        const response = await fetch(apiUrl);

        if (response.ok) {
          const data = await response.json();
          setAnimes(data.data);
        } else {
          console.error(
            'Erro ao obter dados da API do Kitsu:',
            response.status,
          );
        }
      } catch (error) {
        console.error('Erro na requisição para a API do Kitsu:', error.message);
      }
    };

    getAnimesByCategory();
  }, [category]);

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: -200, // Ajuste o valor conforme necessário
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: 200, // Ajuste o valor conforme necessário
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.animeContainer}>
      <h1>Lista de Animes ({category})</h1>
      <div className={styles.animeContent}>
        <ul ref={listRef} className={styles.animeList}>
          {animes.map((anime) => (
            <li key={anime.id} className={styles.animeItem}>
              <Link href={`/anime/${anime.id}`}>
                <div className={styles.animeCard}>
                  <img
                    className={styles.img}
                    src={anime.attributes.posterImage.small}
                    alt={`${anime.attributes.titles.en_jp} Poster`}
                  />
                  <div className={styles.overlay}>
                    <p>{anime.attributes.titles.en_jp}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.arrowRight} onClick={scrollRight}>
          &#8250;
        </div>
        <div className={styles.arrowLeft} onClick={scrollLeft}>
          &#8249;
        </div>
      </div>
    </div>
  );
};

export default AnimeList;
