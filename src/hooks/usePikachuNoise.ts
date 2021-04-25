import { useEffect, useState } from 'react';

export default function usePikachuNoise() {
  const [pikachuSound] = useState<HTMLAudioElement>(
    new Audio('../public/pikapika.mp3')
  );
  const [playing, setPlaying] = useState<boolean>(false);
  const togglePikachuNoise = () => setPlaying(!playing);

  useEffect(() => {
    playing ? pikachuSound.play() : pikachuSound.pause();
  }, [pikachuSound, playing]);

  useEffect(() => {
    pikachuSound.addEventListener('ended', () => setPlaying(false));
    return () => {
      pikachuSound.removeEventListener('ended', () => setPlaying(false));
    };
  }, [pikachuSound]);

  return togglePikachuNoise;
}
