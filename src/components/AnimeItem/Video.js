import styles from '@/styles/VideoPlayer.module.css';
import VideoPlayer from '@/components/VideoPlayer';

const subtitleLang = 'pt-BR';

export default function Video({ UrlLegenda, UrlVideo }) {
  return (
    <div className={styles.videoContainer}>
      <VideoPlayer
        videoUrl={UrlVideo}
        subtitleUrl={UrlLegenda}
        subtitleLang={subtitleLang}
      />
    </div>
  );
}
