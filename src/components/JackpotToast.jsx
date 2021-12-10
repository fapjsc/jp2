import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Toast
import { toast } from 'react-toastify';

// Actions
import { setShowToast } from '../store/actions/jackpotActions';

// Utils
import {
  _getAmount,
  _getFlipNumFontColor,
  _getLevelShortText,
  _splitAmountToStr,
} from '../utils/helpers';

const useToast = () => {
  const dispatch = useDispatch();
  const { showToast } = useSelector((state) => state.jackpot);
  useEffect(() => {
    if (!showToast) return;

    if (showToast?.show) {
      const amount = _getAmount(showToast.data.amountWinning);
      const textColor = _getFlipNumFontColor(showToast.data.level);

      const Msg = () => (
        <div>
          <span>
            👏 恭喜
            {showToast.data.ip}
            {' '}
            -
          </span>

          <span>
            獲得
            {_getLevelShortText(showToast.data.level)}
            {' '}
            -
          </span>

          <span>
            獎金 $
            {_splitAmountToStr(amount)}
          </span>
        </div>
      );

      toast(<Msg />, {
        autoClose: 5000,
        toastId: showToast.data.id,
        style: {
          backgroundColor: 'rgba(0,0,0,.5)',
          color: textColor,
          fontWeight: 'bold',
        },
      });

      dispatch(setShowToast({ show: false, data: null }));
    }
  }, [showToast, dispatch]);
  return (
    null
  );
};

export default useToast;
