import { Vibrant } from 'node-vibrant/node';
import http from 'http';

const url = 'http://www.smilecarefoundation.com/img/logo.png';

http.get(url, (res) => {
  const chunks: Buffer[] = [];
  res.on('data', (chunk) => chunks.push(chunk));
  res.on('end', () => {
    const buffer = Buffer.concat(chunks);
    Vibrant.from(buffer).getPalette().then((palette: any) => {
      console.log('Vibrant:', palette.Vibrant?.hex);
      console.log('DarkVibrant:', palette.DarkVibrant?.hex);
      console.log('LightVibrant:', palette.LightVibrant?.hex);
      console.log('Muted:', palette.Muted?.hex);
      console.log('DarkMuted:', palette.DarkMuted?.hex);
      console.log('LightMuted:', palette.LightMuted?.hex);
    }).catch((err: any) => console.error(err));
  });
});
