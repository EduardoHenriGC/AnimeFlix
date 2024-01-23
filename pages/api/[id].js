// pages/api/[id].js
export default function handler(req, res) {
  const { id, index } = req.query;

  // Simulando uma base de dados de objetos com URLs associadas ao ID
  const data = {
    41370: {
      urls: [
        {
          url: 'https://eno.tendoloads.com/_v6/5edb8db7cb24fae0f2fd240a569c750cd2e85e8482c4e4cfa66c60b1be64f155f8c81ed9305ae7a02e226bd1b8ceecf46bd257da3de14fa7a899fce85149d033178dad04411669c57604e5f411e054ddc48449f00be68d187585774a29e965cb1ad938a01149dc6c020d1768d657ce9604f00db585e1fd5246233bdfb83e15e5/index-f1-v1-a1.m3u8',
          legenda: '/subtitles/1.vtt',
        },
        {
          url: 'https://example.com/url2',
          legenda: 'Legenda para a segunda URL do vídeo 41370',
        },
        {
          url: 'https://pl.crunchyroll.com/evs3/54c5cacd4d7e409a0a2809718143297a/assets/e7cca1fa3ab520c90818d0c435388beb_4720059.mp4/index-v1-a1.m3u8?res=1920x1080&Expires=1705985113&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wbC5jcnVuY2h5cm9sbC5jb20vZXZzMy81NGM1Y2FjZDRkN2U0MDlhMGEyODA5NzE4MTQzMjk3YS9hc3NldHMvZTdjY2ExZmEzYWI1MjBjOTA4MThkMGM0MzUzODhiZWJfNDcyMDA1OS5tcDQvaW5kZXgtdjEtYTEubTN1OD9yZXM9MTkyMHgxMDgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzA1OTg1MTEzfX19XX0_&Signature=YJ7GK1sINRRb5u1a1wZhwiJT2c3OXKdTD4NdZ81RhnNBLFn-vq659ata8gb6zkeBVyOYLWhddg~v0nvQKUL4sIuU4qS0i5~EV56w~h1Pu-HwsOazRMJZH~VMcrfU~J-ikRk38qipsFbxUJgysS5sBEhcpGLWVsWUNbef61aGix7y7cjqEM5ll~ddDLjvSVanH8h3-GhYZ0S~n-W~OqLkguqD1AvJQnDAGh79RVAE1NT7azhykKg3TGV0JFwLLaws1d5r70SaZt1MX5ZcxByGUUxltlXQIyp29BMUesWofdd7UGG5EusHv7wCrhLvOnfA8mzCLYdpL8yBxNZJLejknQ__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA',
          legenda: 'Legenda para a terceira URL do vídeo 41370',
        },
      ],
    },
    13209: {
      urls: [
        {
          url: 'https://eno.tendoloads.com/_v6/1c22c991ab7fc94b07336f8797475586a9f8249e0bf8a284e464afaf8abdb4335961075e53326841007b2032a164c22c74ee28bded95e888a9542106e284f2409646c4b1c61d6e0f9d54c9ccd31da80cac2c2ed383d37a1d6cd5b330dc9a7681899b1eb2ce9cb4edc697db8d86f5aff02417bf24d50e76e991158032bf96b6e9/index-f1-v1-a1.m3u8',
          legenda: '/subtitles/blackClover/1.vtt',
        },
        {
          url: 'https://eno.tendoloads.com/_v6/5cd6309716385569003a137d413c3af4234c8ec0493d62c96745cec2c29916d6b1052e4cf712e3f82ac062c81439a6643111c56a3604e04c5d27f7cf342d6593144b5192695596f9ff71dbd27e3f214b663b74dcb26da672fec02b7e46fc5a3125ac7319cdb5c2de9316d994145b2fe5d572e65db6873c50ddfceb4bf6ff8e92/master.m3u8',
          legenda: '/subtitles/blackClover/2.vtt',
        },
        {
          url: 'https://eno.tendoloads.com/_v6/4e80911d8afce828ccc00aa07cd1b976ea9316282fe50c00fa56ea5c1c22b3ef767df1cd85ed63b4b32257aa4bfcbac41d5b398e94acf7002c0cc2e026bf470ce6468d5bd1c41b6e7f87c6e15dcf82421213c816ccc75377934cc892ee37743ff900103eda9884963656a228d534174dcd0aadb51efcc5355d3bcbf8aa654240/master.m3u8',
          legenda: '/subtitles/blackClover/3.vtt',
        },
        {
          url: 'https://eno.tendoloads.com/_v6/55a5c52ed8981afde748d50a2aaf0946a168e772daf92857f0fbb59e4eacc19aa6d363daffe034d03f07efac2b004bf6bf1f26b44baf00ca5b2d9b486a5fb2a6dc4acc0a29467d8a89cc4f5c1adef7e9fe94c965026e4d91ac4b4c21b969560c9464d9961478c7adde159ed7a20cc93393123fcec43fd7e1446fc30cc525990f/master.m3u8',
          legenda: '/subtitles/blackClover/4.vtt',
        },
        
        {
          url: 'https://eno.tendoloads.com/_v6/1c7d9a6b3730136cc7320ae6105b756eea1c88cc52292664f17e8d64e57c33492d6bf92b347a44d318301f5b14520c5db7170c96913ba948ab30424dfda746eb3fe5b9b951dda24b818b11fb46a475de782b017e0533e317ce0a9a01bddf71aef89ab22bef460d31b9acae069b40a9a36802a52c51621cbef342eed6354f9ca5/master.m3u8',
          legenda: '/subtitles/blackClover/5.vtt',
        }
      ],
    },
  };

  const videoObject = data[id];

  if (!videoObject) {
    return res.status(404).json({ error: 'Object not found' });
  }

  if (index !== undefined) {
    const urlIndex = parseInt(index, 10);

    if (isNaN(urlIndex) || urlIndex < 0 || urlIndex >= videoObject.urls.length) {
      return res.status(400).json({ error: 'Invalid URL index' });
    }

    const requestedUrl = videoObject.urls[urlIndex];
    return res.status(200).json(requestedUrl);
  }

  res.status(200).json(videoObject);
}
