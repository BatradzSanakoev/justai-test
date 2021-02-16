import React from 'react';

import UserCard from '../UserCard/UserCard';
import SearchForm from '../SearchForm/SearchForm';

export default function SearchList({ sortUsers, isLoaded, userSearch, searchResults, handleFavourite }) {

    // Метод открытия/закрытия вкладки группы пользователей
    const handleClickOpen = e => {
        e.target.closest('.main__search-list-user-type').querySelector('.main__search-list-type-users').classList.toggle('main__search-list-type-users_close');
    };

    return (
        <div className='main__search-list'>
            <h3 className='main__search-list-head'>Search user</h3>
            <SearchForm userSearch={userSearch} searchResults={searchResults} sortUsers={sortUsers} />
            <div className='main__search-list-users'>

                {/*  
                    После загрузки юзеров, отсортированные данные заполняютя окно поиска пользоваталей, группируясь по соответствующим вкладкам 
                    Категории, в которых отсутствуют данные скрыты
                */}
                {
                    isLoaded &&
                    Object.entries(sortUsers).map((item, index) =>
                        <div className={`main__search-list-user-type ${item[1].length < 1 && 'main__search-list-user-type_disabled'}`} key={index}>
                            <div className='main__search-list-user-type-head' onClick={handleClickOpen}>
                                <p className='main__search-list-user-type-name'>{item[0]}</p><span className='main__search-list-user-type-arrow'>&#8693;</span>
                            </div>

                            <ul className='main__search-list-type-users'>
                                {

                                    item[1].map(({ ...props }, index) =>
                                        <UserCard
                                            key={index}
                                            index={index}
                                            picture={props.picture}
                                            name={props.name}
                                            registered={props.registered}
                                            email={props.email}
                                            handleFavourite={handleFavourite}
                                        />
                                    )
                                }
                            </ul>
                        </div>
                    )
                }

            </div>
        </div>
    )
}