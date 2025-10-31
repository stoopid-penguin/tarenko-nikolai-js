//1
async function getUsers() {
    try {
        const res = await fetch (`https://jsonplaceholder.typicode.com/users`)
        const users = await res.json();
        console.log(users);
        document.querySelector('#outputContainer').innerHTML = JSON.stringify(users, null, 2);
    } catch(e) {
        console.error(`Не удалось получить юзеров: ${e} `)
    }
}

getUsers();

//2
const id = prompt('введите id желаемого поста')
async function getPost(id) {
    try {
        const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`)
        const posts = await res.json();
        console.log(posts);
        document.querySelector('#outputContainer').innerHTML = JSON.stringify(posts, null, 2);
    } catch(e) {
        console.error(`Не удалось получить пост с id ${id}: ${e} `)
    }
}

getPost(id);