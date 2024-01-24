// pages/index.js
import AnimeList from '../AnimeList';

const HomePage = () => {
  return (
    <div>
      <AnimeList category="popularityRank" /> {/* Exemplo: 'em alta' */}
      <AnimeList category="favoritesCount" /> {/* Exemplo: 'mais assistidos' */}
      <AnimeList category="averageRating" /> {/* Exemplo: 'top rated' */}
      <AnimeList category="ratingRank" /> {/* Exemplo: 'top rated' */}
      <AnimeList category="createdAt" /> {/* Exemplo: 'top rated' */}
    </div>
  );
};

export default HomePage;
