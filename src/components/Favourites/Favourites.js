import React from 'react';

import UserCard from '../UserCard/UserCard';

export default function Favourites({ favourite }) {
    // Компонент, отвечающий за отображение содержимого поля "Избранное"
    //Реализовано DnD вертикальное перемещение между карточками  

    const isFavouriteDOM = true;
    const [favourites, setFavourites] = React.useState([]);
    const [currentUser, setCurrentUser] = React.useState(null);

    const dragOverHandler = (e) => {
        e.preventDefault();
    };

    const dragLeaveHandler = (e) => {
    };

    const dragStartHandler = (e, item) => {
        setCurrentUser(item);
    };

    const dragEndHandler = (e) => {
        e.target.style.boxShadow = 'none';
    };

    const dragDropHandler = (e, item) => {
        e.preventDefault();
        if (!e.target.closest('.main__search-list')) {
            setFavourites(favourites.map((p) => {
                if (p === item) return currentUser;
                if (p === currentUser) return item;
                return p;
            }));
            e.target.style.boxShadow = 'none';
        }
    };

    const dragDropUl = (e) => {
        e.preventDefault();
        favourite.map(f => {
            if (favourites.some(user => user.name === f.name)) return;
            setFavourites([...favourites, f]);
        });
    };

    const dragOverUl = (e) => {
        e.preventDefault();
    };

    // Метод удаления карточки из списка 
    const handleDeleteFavourite = (e, name) => {
        setFavourites(favourites.filter(f => f.name !== name));
    };

    return (
        <div className='main__favourites'>
            <h3 className='main__favourites-head'>Favourites</h3>
            <ul
                className='main__favourites-list'
                draggable={true}
                onDrop={e => dragDropUl(e)}
                onDragOver={e => dragOverUl(e)}
            >
                <div className='main__favourites-list_overlay'>
                    {
                        favourites.map((item, index) =>
                            <li
                                key={index}
                                className='main__favourites-list-item'
                                draggable={true}
                                onDragOver={e => dragOverHandler(e)}
                                onDragLeave={e => dragLeaveHandler(e)}
                                onDragStart={e => dragStartHandler(e, item)}
                                onDragEnd={e => dragEndHandler(e)}
                                onDrop={e => dragDropHandler(e, item)}
                            >
                                <UserCard
                                    key={index}
                                    index={index}
                                    picture={item.picture}
                                    name={item.name}
                                    registered={item.registered}
                                    email={item.email}
                                    isFavouriteDOM={isFavouriteDOM}
                                    handleDeleteFavourite={handleDeleteFavourite}
                                />
                            </li>
                        )
                    }
                </div>
            </ul>
        </div>
    )
}