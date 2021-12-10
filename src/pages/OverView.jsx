import React, { useEffect, useState } from 'react';

// React-animation
import { CSSTransition } from 'react-transition-group';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Actions
import {
  setDisplayWinPrize,
  updateDisplayWinPrize,
  removeWinningData,
} from '../store/actions/jackpotActions';

import { cleanHandState } from '../store/actions/handPayActions';

// Components
import JackpotContent from '../components/JackpotContent';
import JackpotAnimation from '../components/JackAnimation';

const OverView = () => {
  const dispatch = useDispatch();

  const { displayWinPrize, winningPrize } = useSelector((state) => state.jackpot);
  const { status } = useSelector((state) => state.handPay);

  // Init State
  const [showWinAnimation, setShowWinAnimation] = useState(false);
  const [showOverView, setShowOverView] = useState(true);

  // 如果hand pay有request, 將數據清空
  useEffect(() => {
    if (!status) return;
    dispatch(cleanHandState());
  }, [status, dispatch]);

  // 設定中獎播放動畫數據
  useEffect(() => {
    if (winningPrize?.length > 0 && !displayWinPrize) {
      dispatch(setDisplayWinPrize());
    }
  }, [winningPrize, displayWinPrize, dispatch]);

  // 判斷是否開始播放動畫
  useEffect(() => {
    if (!displayWinPrize) return;
    if (displayWinPrize?.isPlayingAnimation !== 'notPlaying') return;
    dispatch(setDisplayWinPrize('isPlaying'));
    setShowWinAnimation(true);
  }, [displayWinPrize, dispatch]);

  // server回傳狀態後更新cashInStatus
  useEffect(() => {
    if (winningPrize[0]?.id !== displayWinPrize?.id) return;
    if (winningPrize[0]?.cashInStatus === displayWinPrize?.cashInStatus) return;
    dispatch(updateDisplayWinPrize(winningPrize[0]?.cashInStatus));
  }, [dispatch, winningPrize, displayWinPrize]);

  // 播放20秒後改變狀態
  useEffect(() => {
    if (!displayWinPrize) return;
    if (displayWinPrize?.isPlayingAnimation !== 'isPlaying') return;
    setTimeout(() => {
      dispatch(setDisplayWinPrize('playingFinishing'));
    }, 20000);
  }, [displayWinPrize, dispatch]);

  // 結束動畫
  useEffect(() => {
    if (!displayWinPrize) return;

    if (displayWinPrize?.cashInStatus === 'success'
    && displayWinPrize?.isPlayingAnimation === 'playingFinishing') {
      setShowWinAnimation(false);
    }
  }, [displayWinPrize, dispatch]);

  return (
    <>
      <CSSTransition
        in={showWinAnimation}
        timeout={600}
        classNames="jackpot-animation-transition"
        mountOnEnter
        unmountOnExit
        onExited={() => {
          setShowOverView(true);
        }}
        onEntered={() => {
          setShowOverView(false);
        }}
      >
        <JackpotAnimation
          playAnimationItem={displayWinPrize}
        />
      </CSSTransition>

      {!showWinAnimation && (
      <CSSTransition
        in={showOverView}
        timeout={600}
        classNames="jackpot-content-transition"
        mountOnEnter
        unmountOnExit
        onEntered={() => {
          if (!displayWinPrize) return;
          dispatch(removeWinningData(displayWinPrize));
        }}
      >
        <JackpotContent />
      </CSSTransition>
      )}
    </>
  );
};

export default OverView;
