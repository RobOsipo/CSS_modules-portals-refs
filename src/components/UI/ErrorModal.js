import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import Button from './Button'
import classes from './ErrorModal.module.css'

const Backdrop = (props) => {
    return <div onClick={props.onClick} className={classes.backdrop} />
}

const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>

        <div className={classes.content}>
            <p>{props.message}</p>
        </div>

        <footer className={classes.actions}>
            <Button onClick={props.onClick}>Okay</Button>
        </footer>
    </Card>
    )
}

const ErrorModal = (props) => {

  return (
    <>
      {ReactDOM.createPortal(
          <Backdrop onClick={props.onClick} />,
          document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
          <ModalOverlay title={props.title} onClick={props.onClick} message={props.message} />,
          document.getElementById('overlay-root')
      )}
    </>
  )
}

export default ErrorModal