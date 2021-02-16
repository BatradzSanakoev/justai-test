import React from 'react';

import delIcon from '../../images/trash.svg';

export default function UserCard({ index, picture, name, registered, email, handleFavourite, isFavouriteDOM, handleDeleteFavourite }) {

    // В данном компоненте реализовано отображение карточки пользователя,
    // а также DnD механика перемещения из поля поиска в поле "Избранное"
    // Для перемещения добавлены эффекты анимации "броска"

    const user = [{ picture, name, registered, email }];

    const dragStartHandler = (e, user) => {
        if (e.target.closest('.main__search-list')) {
            handleFavourite(user);
            document.querySelector('.main__favourites-list').style.background = 'steelblue';
            document.querySelector('.main__favourites-list').style.opacity = '.6';
            e.target.style.border = '2px solid steelblue';
            document.querySelector('.main__favourites-list_overlay').style.visibility = 'hidden';
            document.querySelector('.main__favourites-list_overlay').style.opacity = '0';
            document.querySelector('.main__favourites-list_overlay').style.transition = 'all .2s linear';
        }
    };

    const dragEndHandler = (e) => {
        if (e.target.closest('.main__search-list')) {
            document.querySelector('.main__favourites-list').style.background = 'white';
            document.querySelector('.main__favourites-list').style.opacity = '1';
            e.target.style.border = '1px solid steelblue';
            document.querySelector('.main__favourites-list_overlay').style.visibility = 'visible';
            document.querySelector('.main__favourites-list_overlay').style.opacity = '1';
            document.querySelector('.main__favourites-list_overlay').style.transition = 'all .2s linear';
        }
    };

    const dragOverHandler = e => {
        e.preventDefault();
    };

    return (
        <div
            className='user-card'
            draggable={true}
            onDragStart={e => dragStartHandler(e, user)}
            onDragEnd={e => dragEndHandler(e)}
            onDragOver={e => dragOverHandler(e)}
        >
            <img className='user-card__img' src={picture.large} alt='User img' />
            <div className='user-card__data'>
                <p className='user-card__text'>{name}</p>
                <p className='user-card__text'>
                    register data: {new Date(registered.date).toLocaleString('en', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
                <p className='user-card__text'>{email}</p>
            </div>
            {isFavouriteDOM && <img src={delIcon} alt='delete' className='user-card__delete-icon' onClick={e => handleDeleteFavourite(e, name)} />}
        </div>
    )
}