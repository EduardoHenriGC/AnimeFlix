import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoUrl, subtitleUrl, subtitleLang }) => {

    

  return (
    <div>
      <ReactPlayer
        url={videoUrl}
        controls
        width="100%"
        height="auto"
        config={{
          file: {
            tracks: [
              {
                kind: 'subtitles',
                src: subtitleUrl,
                srcLang: subtitleLang,
                default: true,
              },
            ],
          },
        }}
      />

    </div>
  );
};

export default VideoPlayer;
