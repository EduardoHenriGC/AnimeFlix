'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/AnimeList.module.css';

const AnimeList = () => {
  const [categorias, setCategorias] = useState([]);
  const [animes, setAnimes] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  const traducaoCategorias = {
    'Middle School': 'Ensino Médio',
    Cycling: 'Ciclismo',
    'Elementary School': 'Ensino Fundamental',
    Mermaid: 'Sereia',
    Android: 'Android',
    'All Girls School': 'Escola para Meninas',
    Vampire: 'Vampiro',
    Wrestling: 'Luta Livre',
    Samurai: 'Samurai',
    Elf: 'Elfo',
  };

  useEffect(() => {
    // Carregar categorias ao montar o componente
    carregarCategorias();
  }, []);

  const carregarCategorias = async () => {
    try {
      const response = await fetch('https://kitsu.io/api/edge/categories', {
        headers: {
          'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
          'X-RapidAPI-Host': 'animenewsnetwork.p.rapidapi.com',
        },
      });
      const data = await response.json();

      const categorias = data.data.map(
        (categoria) => categoria.attributes.title,
      );
      setCategorias(categorias);
    } catch (error) {
      console.error('Erro ao carregar categorias:', error);
    }
  };

  const carregarAnimesPorCategoria = async (categoria) => {
    try {
      const response = await fetch(
        `https://kitsu.io/api/edge/anime?filter[categories]=${categoria}&page[limit]=20`,
        {
          headers: {
            'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
            'X-RapidAPI-Host': 'animenewsnetwork.p.rapidapi.com',
          },
        },
      );
      const data = await response.json();
      console.log(data);

      const animes = data.data.map((anime) => anime);
      setAnimes(animes);
      console.log(animes);
      setCategoriaSelecionada(traducaoCategorias[categoria] || categoria);
    } catch (error) {
      console.error(
        `Erro ao carregar animes da categoria ${categoria}:`,
        error,
      );
    }
  };

  return (
    <div className={styles.container}>
      <h1>Animes por Categoria</h1>

      <div>
        {categorias.map((categoria) => (
          <button
            key={categoria}
            onClick={() => carregarAnimesPorCategoria(categoria)}
          >
            {traducaoCategorias[categoria] || categoria}
          </button>
        ))}
      </div>

      {categoriaSelecionada && (
        <div className={styles.animeContent}>
          <h2>Animes da Categoria: {categoriaSelecionada}</h2>
          <ul>
            {animes.map((anime) => (
              <li key={anime.id} className={styles.animeItem}>
                <Link href={`/anime/${anime.id}`}>
                  <p>{anime.attributes.titles.en_jp}</p>
                  <img
                    className={styles.img}
                    src={anime.attributes.posterImage.small}
                    width={180}
                    alt={`${anime.attributes.titles.en_jp} Poster`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AnimeList;
