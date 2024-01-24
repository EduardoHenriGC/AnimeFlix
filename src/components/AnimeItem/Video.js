import styles from '@/styles/VideoPlayer.module.css';
import VideoPlayer from '@/components/VideoPlayer';

const subtitleLang = 'pt-BR';

export default function Video({ UrlLegenda, UrlVideo }) {
  return (
    <div className={styles.videoContainer}>
      <VideoPlayer
        className={styles.videolixo}
        videoUrl={UrlVideo}
        subtitleUrl={UrlLegenda}
        subtitleLang={subtitleLang}
      />
    </div>
  );
}
