import { useEffect } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { CgClose } from 'react-icons/cg';
import PropTypes from 'prop-types';

import IconButton from './IconButton';

const modalRoot = document.querySelector('#modal-root');

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0 0 0 / 0.5);
`;

const Content = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 600px;
  width: 100%;
  padding: ${({ theme }) => theme.space[5]}px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.normal};
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  top: 10px;
  right: 15px;
`;

const Modal = ({ children, onCloseModal }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const onKeyDown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onCloseModal]);

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <Content>
        <CloseButton onClick={onCloseModal} aria-label='close modal'>
          <CgClose />
        </CloseButton>
        {children}
      </Content>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
