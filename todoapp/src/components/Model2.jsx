import Modal from 'react-modal'
import { useState } from 'react'

// Accessibility setup
Modal.setAppElement('#root')

function Model2() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          content: {
            position: 'static',
            inset: 'unset',
            width: '400px',
            padding: '20px',
            borderRadius: '10px',
            background: 'white',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            color: 'black',
  background: 'white',
          },
        }}
      >
        <h2>Hello Modal</h2>
        <p>✅ You just opened this modal by clicking the button!</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  )
}

export default Model2
