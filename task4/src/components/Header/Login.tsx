import React from 'react';
import LoginForm from 'components/Header/LoginForm';
// import { Modal, ModalBody } from 'reactstrap';
import Modal from 'react-modal';
import classes from 'styles/header.module.scss';

interface IState {
  modal: boolean;
}

export default class Login extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  toggleModal = () => {
    this.setState((prevState) => {
      return {
        modal: !prevState.modal,
      };
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className={classes.login}>
        <button onClick={this.toggleModal.bind(null)} className={classes.login__btn} type="button">
          Войти
        </button>
        <Modal
          isOpen={this.state.modal}
          onRequestClose={this.toggleModal.bind(null)}
          style={{
            overlay: {
              zIndex: 20,
              backgroundColor: 'transparent',
            },
            content: {
              margin: '150px auto',
              height: '330px',
              width: '330px',
              overflow: 'hidden',
              borderRadius: '8px',
              backgroundColor: '#312b45',
              zIndex: 20,
            },
          }}>
          <LoginForm />
        </Modal>
      </div>
    );
  }
}
