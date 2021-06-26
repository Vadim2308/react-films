import React from 'react';
import LoginForm from 'components/Header/LoginForm';
import Modal from 'react-modal';
import { TUser } from 'types/global';

import classes from 'styles/header.module.scss';

const LoginModal: React.FC = () => {
  const [modal, setModal] = React.useState<boolean>(false);
  const toggleModal = (): void => {
    setModal(!modal);
  };
  return (
    <div className={classes.login}>
      <button onClick={toggleModal.bind(null)} className={classes.login__btn} type="button">
        Войти
      </button>
      <Modal
        isOpen={modal}
        onRequestClose={toggleModal.bind(null)}
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
};

// class LoginModal extends React.Component<IProps, IState> {
//   constructor(props: IProps) {
//     super(props);
//     this.state = {
//       modal: false,
//     };
//   }

//   toggleModal = () => {
//     this.setState((prevState) => {
//       return {
//         modal: !prevState.modal,
//       };
//     });
//   };

//   render() {
//     return (
//       <div className={classes.login}>
//         <button onClick={this.toggleModal.bind(null)} className={classes.login__btn} type="button">
//           Войти
//         </button>
//         <Modal
//           isOpen={this.state.modal}
//           onRequestClose={this.toggleModal.bind(null)}
//           style={{
//             overlay: {
//               zIndex: 20,
//               backgroundColor: 'transparent',
//             },
//             content: {
//               margin: '150px auto',
//               height: '330px',
//               width: '330px',
//               overflow: 'hidden',
//               borderRadius: '8px',
//               backgroundColor: '#312b45',
//               zIndex: 20,
//             },
//           }}>
//           {/* <LoginForm /> */}
//         </Modal>
//       </div>
//     );
//   }
// }

// const LoginContainer = () => {
//   return (
//     <AppContext.Consumer>
//       {(context) => {
//         return (
//           <LoginModal updateUser={context.updateUser} updateSessionId={context.updateSessionId} />
//         );
//       }}
//     </AppContext.Consumer>
//   );
// };

// export default LoginContainer;
export default LoginModal;
