//1
const userName = prompt('Ведите name');
const userEmail = prompt('Ведите email');
const userPhone = prompt('Ведите phone');

async function createUser(user) {
    try {
        const res = await fetch (`https://jsonplaceholder.typicode.com/users`, {
            method: "POST"
            
        })
        const newUser = await res.json();
        console.log('user created!')
    } catch(e) {
        console.error(`Не удалось добавить пользователя ${e}`)
    }
}

createUser({
    name: userName,
    email: userEmail,
    phone: userPhone
}
);
const postTitle = prompt('Ведите postTitle');
const postBody = prompt('Ведите postBody');
const postUserId = prompt('Ведите postUserId');
//2
async function createPost(post) {
    try {
        const res = await fetch (`https://jsonplaceholder.typicode.com/posts`, {
            method: "POST"
            
        })
        const newPost = await res.json();
        console.log('post created!')
    } catch(e) {
        console.error(`Не удалось добавить почту ${e}`)
    }
}

createPost({
  title: postTitle,
  body: postBody,
  userId: postUserId
}
);
