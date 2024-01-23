import data13209 from './videos/13209';
import data42765 from './videos/42765';
import data46321 from './videos/46321';
import data1376 from './videos/1376';
import data41370 from './videos/41370';
import data5646 from './videos/5646';
import data43806 from './videos/43806';
import data41046 from './videos/41046';
import data42586 from './videos/42586';
import data44212 from './videos/44212';

export default function handler(req, res) {
  const { id, index } = req.query;

  const data = {
    13209: data13209,
    42765: data42765,
    46231: data46321,
    1376: data1376,
    41370: data41370,
    5646: data5646,
    43806: data43806,
    41046: data41046,
    42586: data42586,
    44212: data44212,
  };

  const videoObject = data[id];

  if (!videoObject) {
    return res.status(404).json({ error: 'Object not found' });
  }

  if (index !== undefined) {
    const urlIndex = parseInt(index, 10);

    if (
      isNaN(urlIndex) ||
      urlIndex < 0 ||
      urlIndex >= videoObject.urls.length
    ) {
      return res.status(400).json({ error: 'Invalid URL index' });
    }

    const requestedUrl = videoObject.urls[urlIndex];
    const status = requestedUrl.status || true; // Pode ajustar o valor padrão conforme necessário

    // Retornando URLs e Status separados
    return res.status(200).json({
      url: requestedUrl.url,
      legenda: requestedUrl.legenda,
      ep: requestedUrl.ep,
      status: status,
      dublado: requestedUrl.dublado,
    });
  }

  // Retornando URLs e Status separados para a lista completa
  const urlsWithStatus = videoObject.urls.map((urlObject) => ({
    url: urlObject.url,
    legenda: urlObject.legenda,
    ep: urlObject.ep,
    status: urlObject.status || true,
    dublado: urlObject.dublado, // Pode ajustar o valor padrão conforme necessário
  }));

  res.status(200).json({
    urls: urlsWithStatus,
  });
}
