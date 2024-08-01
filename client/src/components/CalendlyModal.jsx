// CalendlyModal.jsx
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const CalendlyModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '80%'
        }
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <iframe
          src="https://calendly.com/ankur143513/30min"
          style={{
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          frameBorder="0"
        ></iframe>
      </div>
    </Modal>
  );
};

export default CalendlyModal;
