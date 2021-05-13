import React from 'react';

import SearchList from '../SearchList/SearchList';
import Favourites from '../Favourites/Favourites';
import Preloader from '../Preloader/Preloader';

// import DataContext from '../../context/DataContext';

export default function Main({ sortUsers, isLoaded, userSearch, searchResults, handleFavourite, favourite, isLoadError, isLoading }) {

    // const dataContext = React.useContext(DataContext);
    // React.useEffect(() => {
    //     dataContext && console.log(dataContext);
    // }, []);

    return (
        <main className='main'>
            <h2 className='main__head'>Users List</h2>
            <div className='main__container'>

                {/* Пока данные не загружены с сервера в окне списка пользоваталей будет отображаться спинер загрузки */}
                {
                    isLoaded ? <SearchList
                        sortUsers={sortUsers}
                        isLoaded={isLoaded}
                        userSearch={userSearch}
                        searchResults={searchResults}
                        handleFavourite={handleFavourite}
                    /> : <Preloader isLoading={isLoading} isLoadError={isLoadError} />
                }

                <div className='main__hr' />

                <Favourites favourite={favourite} />

            </div>
        </main>
    )
}