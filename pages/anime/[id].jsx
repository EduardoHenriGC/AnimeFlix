import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '@/styles/VideoPlayer.module.css';
import '@/styles/global.css';
import ListEp from '@/components/AnimeItem/ListEp';
import Desc from '@/components/AnimeItem/Desc';
import Poster from '@/components/AnimeItem/Poster';
import Video from '@/components/AnimeItem/Video';
import FreezeVideo from '@/components/FreezeVideo';

const AnimeDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [anime, setAnime] = useState(null);
  const [UrlVideo, setUrlVideo] = useState(null);
  const [UrlLegenda, setUrlLegenda] = useState(null);
  const [indexVideo, setIndexVideo] = useState(0);
  const [selectedOption, setSelectedOption] = useState(1);
  const [currentEp, setCurrentEp] = useState(null);
  const [status, setStatus] = useState(false);
  const [data, setData] = useState(null);

  const episodesPerRange = 50; // Defina o número de episódios por faixa

  const calculateDropdownOptions = () => {
    const options = anime
      ? Array.from(
          { length: Math.ceil(anime.episodeCount / episodesPerRange) },
          (_, index) => ({
            start: index * episodesPerRange + 1,
            end: Math.min((index + 1) * episodesPerRange, anime.episodeCount),
          }),
        )
      : [];

    return options;
  };

  const dropdownOptions = calculateDropdownOptions();

  const handleDropdownChange = (e) => {
    setSelectedOption(Number(e.target.value));
  };

  useEffect(() => {
    // Carregar detalhes do anime usando o ID
    if (id) {
      carregarDetalhesDoAnime(id);
      carregarUrlVideo(id);
    }
  }, [id]);

  useEffect(
    () => {
      carregarUrlVideo(id);
    },
    [indexVideo],
    [UrlVideo],
  );

  const carregarDetalhesDoAnime = async (animeId) => {
    try {
      const response = await fetch(
        `https://kitsu.io/api/edge/anime/${animeId}`,
        {
          headers: {
            'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
            'X-RapidAPI-Host': 'animenewsnetwork.p.rapidapi.com',
          },
        },
      );

      const data = await response.json();
      setAnime(data.data.attributes);
    } catch (error) {
      console.error('Erro ao carregar detalhes do anime:', error);
    }
  };

  const carregarUrlVideo = async (animeId) => {
    try {
      const response = await fetch(
        `https://anime-flix-eight-azure.vercel.app/api/${animeId}?index=${indexVideo}`,
        {},
      );

      const data = await response.json();
      setUrlVideo(data.url);
      setUrlLegenda(data.legenda);
      setCurrentEp(data.ep);
      setStatus(data.status);
      setData(data);
    } catch (error) {
      console.error('Erro ao carregar detalhes do anime:', error);
    }
  };

  if (!anime) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <Poster anime={anime} />
      <div className={styles.Container}>
        <Desc anime={anime} status={status} />
        {UrlVideo ? (
          <Video
            anime={anime}
            currentEp={currentEp}
            UrlLegenda={UrlLegenda}
            UrlVideo={UrlVideo}
          />
        ) : (
          <FreezeVideo />
        )}
        <ListEp
          selectedOption={selectedOption}
          dropdownOptions={dropdownOptions}
          handleDropdownChange={handleDropdownChange}
          setIndexVideo={setIndexVideo}
          anime={anime}
          setUrlVideo={setUrlVideo}
          data={data}
          currentEp={currentEp}
        />
      </div>
    </div>
  );
};

export default AnimeDetails;
