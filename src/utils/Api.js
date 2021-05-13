const BASE_URL = 'https://randomuser.me/api/?results=5000';

const getUsers = () => {
    return fetch(`${BASE_URL}`, {
        method: 'GET',
        headers: {
            'Content-type' : 'application/json'
        }
    })
    .then(res => res.json())
    .then(res => {
        return res.results;
    })
};

export default { getUsers };