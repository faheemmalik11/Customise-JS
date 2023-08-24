const user = {
    name: 'Paul',
    gender: 'male',
};
const article = {
    Title: 'JS Functions',
    date: '24-July-2023'
};

const summary = {...user, ...article};
console.log(summary);