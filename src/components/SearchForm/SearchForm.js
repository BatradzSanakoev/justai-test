import React from 'react';

export default function SearchForm({ userSearch }) {
    // Компонент поиска пользователей в списке
    // Используется метод userSearch из App.js 
    // Для передачи значения инпута используется управляемый компонент 
    const [text, setText] = React.useState('');

    const handleChange = e => {
        const value = e.target.value;
        e.target.name === 'input' && setText(value);
        userSearch(value);
    };

    return (
        <>
            <input type='text' name='input' value={text || ''} placeholder='Search field' className='main__search-input' onChange={handleChange} />
        </>
    )
}