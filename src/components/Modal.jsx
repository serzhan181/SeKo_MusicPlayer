import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById('modal-root')

export function Modal({ children }) {
  const el = document.createElement()
  useEffect(() => {
    modalRoot.appendChild(el)

    return () => {
      modalRoot.removeChild(el)
    }
  }, [])

  return createPortal(children, el)
}
