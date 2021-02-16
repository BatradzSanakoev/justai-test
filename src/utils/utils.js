// Здесь хранятся методы заполнения и очистки шаблона для отсортированного списка пользователей

const fillUsersCategories = (users) => {
    const usersCategories = { '1-10': [], '11-20': [], '21-30': [], '31-40': [], '41-50': [], '51-60': [], '61-70': [], '71-80': [], '81-90': [], '91-100': [] };
    reNewUsersCategories(usersCategories);
    users.forEach(user => {
        if (user.registered.age >= 0 && user.registered.age <= 10) usersCategories['1-10'].push(user);
        if (user.registered.age >= 11 && user.registered.age <= 20) usersCategories['11-20'].push(user);
        if (user.registered.age >= 21 && user.registered.age <= 30) usersCategories['21-30'].push(user);
        if (user.registered.age >= 31 && user.registered.age <= 40) usersCategories['31-40'].push(user);
        if (user.registered.age >= 41 && user.registered.age <= 50) usersCategories['41-50'].push(user);
        if (user.registered.age >= 51 && user.registered.age <= 60) usersCategories['51-60'].push(user);
        if (user.registered.age >= 61 && user.registered.age <= 70) usersCategories['61-70'].push(user);
        if (user.registered.age >= 71 && user.registered.age <= 80) usersCategories['71-80'].push(user);
        if (user.registered.age >= 81 && user.registered.age <= 90) usersCategories['81-90'].push(user);
        if (user.registered.age >= 91 && user.registered.age <= 100) usersCategories['91-100'].push(user);
    });

    return usersCategories;
};

const reNewUsersCategories = (usersCategories) => {
    const emptyObj = Object.entries(usersCategories).map(items => {
        items[1] = [];
    });

    return emptyObj;
};

export default { fillUsersCategories, reNewUsersCategories };













        // e.target.closest('.main__search-list-user-type').classList.toggle('main__search-list-user-type_close');
        // e.target.closest('.main__search-list-user-type').nextElementSibling && e.target.closest('.main__search-list-user-type').nextElementSibling.classList.toggle('main__search-list-user-type_up');