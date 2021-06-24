import React from 'react';
import classes from 'styles/App.module.scss';
import Header from './Header/Header';
import Slider from './Slider/Slider';
import MoviesContainer from './Movies/MoviesContainer';
import Filters from './Filters/Filters';
import Pagination from './Pagination/Pagination';
import { IFilters, TGenre, TUser } from 'types/global';
import { API_URL, API_KEY_STORE_FILM } from 'api/api';
import { connect, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { useEffect } from 'react';

const cookies = new Cookies();

// interface IAppContext {
//   user: TUser | null;
//   updateUser: (user: TUser) => void;
//   updateSessionId: (session_id: string) => void;
//   onLogOut: () => void;
// }

// export const AppContext = React.createContext<IAppContext>({
//   user: null,
//   updateUser: () => {},
//   updateSessionId: () => {},
//   onLogOut: () => {},
// });

// type TProps = {
//   user: TUser | null;
//   session_id?: null | string;
//   page: number;
//   filters: IFilters;
// };

type TState = {
  appState: {
    user: TUser | null;
    session_id?: null | string;
    page: number;
    filters: IFilters;
  };
};

function App() {
  const page = useSelector((state: TState) => state.appState.page);
  const filters = useSelector((state: TState) => state.appState.filters);

  useEffect(() => {
    const session_id = cookies.get('session_id');
    if (session_id) {
      let userFromCookies = async () => {
        let response = await fetch(
          `${API_URL}/account?api_key=${API_KEY_STORE_FILM}&session_id=${session_id}`,
        );
        let user = await response.json();
        console.log(user); // получаем юзера из куков
      };
      userFromCookies();
    }
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.main_inner}>
          <Pagination page={page} />
          {/* <MoviesContainer page={page} filters={filters} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;

// class App extends React.Component<TProps, TState> {
//   constructor(props: TProps) {
//     super(props);
//     // this.state = {
//     //   user: null,
//     //   session_id: null,
//     //   page: 1,
//     //   filters: {
//     //     sort_by: 'popularity.desc',
//     //     year: String(new Date().getFullYear()),
//     //     genres: [],
//     //     filteredGenre: [],
//     //     voite: '',
//     //   },
//     // };
//   }

//   componentDidMount() {
//     const session_id = cookies.get('session_id');
//     if (session_id) {
//       let userFromCookies = async () => {
//         let response = await fetch(
//           `${API_URL}/account?api_key=${API_KEY_STORE_FILM}&session_id=${session_id}`,
//         );
//         let user = await response.json();
//         this.setState((prevState) => {
//           return {
//             ...prevState,
//             user: user,
//           };
//         });
//       };
//       userFromCookies();
//     }
//   }

//   updateUser = (user: TUser) => {
//     this.setState((prevState) => {
//       return {
//         ...prevState,
//         user: user,
//       };
//     });
//   };

//   updateSessionId = (session_id: string) => {
//     cookies.set('session_id', session_id, { path: '/', maxAge: 604800 });
//     this.setState((prevState) => {
//       return {
//         ...prevState,
//         session_id: session_id,
//       };
//     });
//   };

//   onLogOut = () => {
//     cookies.remove('session_id');
//     this.setState(() => {
//       return {
//         user: null,
//         session_id: null,
//       };
//     });
//   };

//   onChangePage = (page: number) => {
//     if (page < 1) {
//       this.setState(() => {
//         return {
//           page: (page = 1),
//         };
//       });
//     }
//     this.setState(() => {
//       return {
//         page,
//       };
//     });
//   };

//   resetState = () => {
//     this.setState((prevState: TState) => {
//       return {
//         page: 1,
//         filters: {
//           sort_by: 'popularity.desc',
//           year: String(new Date().getFullYear()),
//           genres: prevState.filters.genres,
//           filteredGenre: [],
//           voite: '',
//         },
//       };
//     });
//   };

//   onChangeFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const name = event.currentTarget.name;
//     const value = event.currentTarget.value;
//     console.log(name, value);
//     this.setState((prevState) => {
//       return {
//         filters: {
//           ...prevState.filters,
//           [name]: value,
//         },
//       };
//     });
//   };

//   setGenre = (data: TGenre[]) => {
//     this.setState((prevState) => {
//       return {
//         filters: {
//           ...prevState.filters,
//           genres: data,
//         },
//       };
//     });
//   };

//   handleChangeGanre = (id: string) => {
//     const { filteredGenre } = this.state.filters;
//     let newGenre: string[] = [];
//     if (filteredGenre.includes(id)) {
//       newGenre = filteredGenre.filter((el) => el !== id);
//     } else {
//       newGenre.push(...filteredGenre, id);
//     }
//     this.setState((prevState) => {
//       return {
//         filters: {
//           ...prevState.filters,
//           filteredGenre: newGenre,
//         },
//       };
//     });
//   };

//   render() {
//     console.log(this.props);
//     const { filters, page, user } = this.props;
//     return (
//       // <AppContext.Provider
//       //   value={{
//       //     user,
//       //     updateUser: this.updateUser,
//       //     updateSessionId: this.updateSessionId,
//       //     onLogOut: this.onLogOut,
//       //   }}>
//       <div className={classes.main}>
//         <div className={classes.container}>
//           <Header user={user} />
//           <Slider />
//           <Filters
//             filters={filters}
//             onChangeFilter={this.onChangeFilter}
//             setGenre={this.setGenre}
//             handleChangeGanre={this.handleChangeGanre}
//             resetState={this.resetState}
//           />
//           <div className={classes.main_inner}>
//             <Pagination page={page} onChangePage={this.onChangePage} />
//             <MoviesContainer page={page} filters={filters} />
//           </div>
//         </div>
//       </div>
//       // </AppContext.Provider>
//     );
//   }
// }

// function mapStateToProps(state: any) {
//   return {
//     ...state.appState,
//   };
// }

// export default connect<any, any, any, any>(mapStateToProps)(App);
