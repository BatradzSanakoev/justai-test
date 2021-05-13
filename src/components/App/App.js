import React from 'react';

import './App.css';
import DataContext from '../../context/DataContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Api from '../../utils/Api';
import utils from '../../utils/utils';

function App() {

  // Стейт переменные для хранения списка юзеров, состояний загрузки и найденных пользователей
  const [sortUsers, setSortUsers] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState([]);
  const [usersClone, setUsersClone] = React.useState([]);
  const [favourite, setFavourite] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoadError, setIsLoadError] = React.useState(false);


  const [dataContext, setDataContext] = React.useState([]);

  // Загрузка данных с сервера
  React.useEffect(() => {
    setIsLoaded(false);
    setIsLoading(true);
    Api.getUsers()
      .then(users => {
        users.sort((a, b) => {
          return a.registered.age - b.registered.age;
        });
        users.map(user => {
          user.name = user.name.first + ' ' + user.name.last;
        });
        setDataContext(utils.fillUsersCategories(users));
        setSortUsers(utils.fillUsersCategories(users));
        // setUsersClone(utils.fillUsersCategories(users));
      })
      .catch(err => {
        console.log(err);
        setIsLoadError(true);
      })
      .finally(() => {
        setIsLoaded(true);
        setIsLoading(false);
      });
  }, []);

  // Метод поиска пользователей в отсортированном списке
  const userSearch = value => {
    // setSortUsers(usersClone);
    setSortUsers(dataContext);

    let tempArr = new Array();

    Object.values(dataContext).map(items => {
      Object.values(items).map(item => {
        tempArr.push(item);
      });
    });

    const filterUsers = tempArr.filter(i => {
      return i.name.toLowerCase().includes(value);
    });

    setSortUsers(utils.fillUsersCategories(filterUsers));
  };

  // Метод сохранения карточки юзера в переменную состояния "Избранное"
  const handleFavourite = (item) => {
    setFavourite(item);
  };

  return (
    <div className="App">
      <DataContext.Provider value={dataContext}>
        <Header />
        <Main
          sortUsers={sortUsers}
          isLoaded={isLoaded}
          userSearch={userSearch}
          searchResults={searchResults}
          handleFavourite={handleFavourite}
          favourite={favourite}
          isLoadError={isLoadError}
          isLoading={isLoading}
        />
        <Footer />
      </DataContext.Provider>
    </div>
  );
}

export default App;
