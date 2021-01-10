import React from 'react'
import { Modal } from '../Modal'
import { ErrorContainer, ModalContainer } from './ErrorSong.style'

export const ErrorSong = ({ display, setIsModalOpened }) => {
  return (
    <Modal>
      <ModalContainer display={display}>
        <ErrorContainer>
          <img
            onClick={() => setIsModalOpened(false)}
            src='assets/close_modal.svg'
            alt='close'
          />
          <h2>
            Sorry! But this song is not available, try to play another one!
          </h2>
        </ErrorContainer>
      </ModalContainer>
    </Modal>
  )
}
