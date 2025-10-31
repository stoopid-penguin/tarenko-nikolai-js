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

/* const wrapper = document.querySelector('#outputContainer')
async function getProducts() {
    try {
        const res = await fetch ('https://fakestoreapi.com/products')
        const products = await res.json();
        wrapper.innerHTML = JSON.stringify(products, 2, null);
    } catch(e) {
        console.error('Не удалось получить продукты: ' + e)
    }
}

// getProducts();

async function getProduct(id) {
    try {
        const res = await fetch (`https://fakestoreapi.com/products/${id}`)
        const products = await res.json();
        wrapper.innerHTML = JSON.stringify(products, 2, null);
    } catch(e) {
        console.error(`Не удалось получить продукт с id ${id}: ${e} `)
    }
}

getProduct(10); */
/* async function updateProduct(product, id) {
    try {
        const res = await fetch (`https://fakestoreapi.com/products/${id}`, {
            method: "PUT"
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)

        })
        const updatedProduct = await res.json();
        console.log('product created!')
    } catch(e) {
        console.error(`Не удалось обновить продукт ${e}`)
    }
}

updateProduct({
    title: 'NFT Носки',
    price: 100
}, 10);

async function deleteProduct(id) {
    try {
        const res = await fetch (`https://fakestoreapi.com/products/${id}`, {
            method: "DELETE"
        })
        const updatedProduct = await res.json();
        console.log('product deleted!')
    } catch(e) {
        console.error(`Не удалось удалить продукт ${e}`)
    }
}

deleteProduct(10); */