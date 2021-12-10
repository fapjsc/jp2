import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { sendHandPayRequest } from '../store/actions/handPayActions';

import styles from './JackpotHandPay.module.scss';

const JackpotHandPay = ({ uuid, insertId, cashInStatus }) => {
  // InitState
  const [enableBtn, setEnableBtn] = useState(false);

  // Redux
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.handPay);

  useEffect(() => {
    if (error) setEnableBtn(true);
  }, [error]);

  const onClickHandler = () => {
    setEnableBtn(false);
    const data = {
      uuid,
      insertId,
    };
    dispatch(sendHandPayRequest(data));
  };

  const buttonTxt = () => {
    if (error) {
      return '派彩失敗, 再試一次';
    }

    if (status === 'pending') {
      return '請稍等...';
    }

    if (cashInStatus === 'success') {
      return '派彩成功';
    }

    return '手動派彩';
  };
  return (
    <div
      style={{
        color: '#fff',
        position: 'fixed',
        bottom: 20,
        right: 20,
      }}
    >
      <button
        type="button"
        className={styles.raise}
        onClick={onClickHandler}
        disabled={!enableBtn}
      >
        {buttonTxt()}
      </button>
      {/* <br />
        <Space>
          <p>{playAnimationItem?.cashInStatus}</p>
          <p>
            {String(playAnimationItem?.id).substring(
              String(playAnimationItem?.id).length - 5,
            )}
          </p>
        </Space> */}
    </div>
  );
};

JackpotHandPay.propTypes = {
  uuid: PropTypes.string.isRequired,
  insertId: PropTypes.number.isRequired,
  cashInStatus: PropTypes.string.isRequired,
};

export default JackpotHandPay;
