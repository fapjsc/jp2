import { useEffect } from 'react';

// Redux
import { useSelector } from 'react-redux';

// Audio
import staticAudio from '../assets/audio/static.mp3';
import winPrizeAudio from '../assets/audio/winPrize.mp3';
import goldScrollAudio from '../assets/audio/gold-scroll.mp3';
import jackpotAudio from '../assets/audio/jackpot.mp3';

const useAudio = () => {
  const { displayWinPrize, jackpotData } = useSelector((state) => state.jackpot);

  // 背景音樂
  useEffect(() => {
    let audio;

    if (displayWinPrize) audio = new Audio(winPrizeAudio);

    if (!displayWinPrize) audio = new Audio(staticAudio);

    if (!audio) return;

    audio.loop = true;

    const audioPromise = audio.play();

    return () => {
      if (!audio) return;

      if (audioPromise !== undefined) {
        audioPromise
          .then(() => {
            audio.pause();
            audio.currentTime = 0;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
  }, [displayWinPrize]);

  // 金幣音效
  useEffect(() => {
    let goldAudio;

    if (jackpotData) goldAudio = new Audio(goldScrollAudio);

    if (!goldAudio) return;

    goldAudio.playbackRate = 0.6;
    const goldPromise = goldAudio.play();

    if (displayWinPrize && goldAudio && goldPromise !== undefined) {
      goldPromise
        .then(() => {
          goldAudio.pause();
          goldAudio.currentTime = 0;
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return () => {
      if (!goldAudio) return;

      if (displayWinPrize && goldPromise !== undefined) {
        goldPromise
          .then(() => {
            goldAudio.pause();
            goldAudio.currentTime = 0;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
  }, [jackpotData, displayWinPrize]);

  // JP音效
  useEffect(() => {
    if (!displayWinPrize) return;

    let jpAudio;

    if (displayWinPrize?.level === 'jackpot') { jpAudio = new Audio(jackpotAudio); }

    if (!jpAudio) return;

    jpAudio.loop = true;
    const jpAudioPromise = jpAudio?.play();

    return () => {
      if (!jpAudio) return;

      if (jpAudioPromise !== undefined) {
        jpAudioPromise
          .then(() => {
            jpAudio.pause();
            jpAudio.currentTime = 0;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
  }, [displayWinPrize]);

  return (
    null
  );
};

export default useAudio;
