import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// Toast
import { toast } from 'react-toastify';

// Actions
import { removeServiceBell } from '../store/actions/jackpotActions';

// Audio
import serviceAudio from '../assets/audio/service-ball.mp3';
import closeService from '../assets/audio/close-service-bell.wav';

const ServiceToast = () => {
  // Redux
  const dispatch = useDispatch;
  const { serviceBell } = useSelector((state) => state.jackpot);

  // 服務鈴
  useEffect(() => {
    if (!serviceBell?.length) return;

    // Service open Handler
    const serviceOpen = () => {
      const serviceBellAudio = new Audio(serviceAudio);
      serviceBellAudio.play();
    };

    // Service close handler
    const serviceBellCloseHandler = (id) => {
      dispatch(removeServiceBell(id));
      const closeBellAudio = new Audio(closeService);
      closeBellAudio.currentTime = 0.5;
      closeBellAudio.play();
    };

    // Toast Message
    const Msg = ({ machineName, time }) => (
      <div>
        服務人員請至
        <span style={{ color: 'red' }}>
          {machineName}
        </span>
        -
        {time}
      </div>
    );

    serviceBell.forEach((el) => {
      if (el.show === 'action') {
        toast.error(<Msg time={el.time} machineName={el.data} />, {
          position: 'bottom-left',
          autoClose: false,
          toastId: el.id,
          onOpen: () => serviceOpen(),
          // style: { backgroundColor: '#fff' },

        });
      } else {
        serviceBellCloseHandler(el.id);
        toast.dismiss(el.id);
        dispatch(removeServiceBell(el.id));
      }
    });

    Msg.propTypes = {
      machineName: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    };
  }, [serviceBell, dispatch]);
  return (
    null
  );
};

export default ServiceToast;
