import React from 'react';
import LoginForm from 'components/Header/LoginForm';
import Modal from 'react-modal';
import classes from 'styles/header.module.scss';

interface IState {
  modal: boolean;
}

interface IProps {
  updateUser: (user: any) => void;
  updateSessionId: (session_id: any) => void;
}

export default class Login extends React.Component<IProps, IState> {
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
          <LoginForm
            updateUser={this.props.updateUser}
            updateSessionId={this.props.updateSessionId}
          />
        </Modal>
      </div>
    );
  }
}
