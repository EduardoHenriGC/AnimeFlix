// pages/anime/[id].jsx
import VideoPlayer from '@/components/VideoPlayer';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';





const AnimeDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [anime, setAnime] = useState(null);
  const [UrlVideo, setUrlVideo] = useState(null)
  const [UrlLegenda, setUrlLegenda] = useState(null)
  const [indexVideo, setIndexVideo] = useState(0)
  

  const subtitleLang = 'pt-BR';

  useEffect(() => {
    // Carregar detalhes do anime usando o ID
    if (id) {
      carregarDetalhesDoAnime(id);
      carregarUrlVideo(id)

    }
  }, [id]);

  useEffect(()=>{
    carregarUrlVideo(id)
    

  },[indexVideo],[UrlLegenda])

  const carregarDetalhesDoAnime = async (animeId) => {
    try {
      const response = await fetch(`https://kitsu.io/api/edge/anime/${animeId}`, {
        headers: {
          'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
          'X-RapidAPI-Host': 'animenewsnetwork.p.rapidapi.com',
        },
      });

      const data = await response.json();
      setAnime(data.data.attributes);
      
    } catch (error) {
      console.error('Erro ao carregar detalhes do anime:', error);
    }
  };

  const carregarUrlVideo = async (animeId) => {
    try {
      const response = await fetch(`https://anime-flix-eight-azure.vercel.app/${animeId}?index=${indexVideo}`, {
       });

      const data = await response.json();
      setUrlVideo(data.url);
      setUrlLegenda(data.legenda)
      
    } catch (error) {
      console.error('Erro ao carregar detalhes do anime:', error);
    }
  };

  if (!anime) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>{anime.titles.en_jp}</h1>
      <p>{anime.synopsis}</p>
      {/* Adicione outros detalhes do anime conforme necessário */}
      <VideoPlayer
        videoUrl={UrlVideo}
        subtitleUrl={UrlLegenda}
        subtitleLang={subtitleLang}
      />
      <p>nº de episódios: {anime.episodeCount}</p>
      {Array.from({ length: anime.episodeCount }, (_, index) => (
        <button key={index + 1} onClick={()=> setIndexVideo(index)}>{index + 1}</button>
      ))}
    </div>
  );
};

export default AnimeDetails;
