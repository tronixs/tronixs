const products = [
    {id: 1, title: 'Notebook', foto: '../DZ_0_1/img/Notebook.png', price: 2000},
    {id: 2, title: 'Mouse', foto: '../DZ_0_1/img/Mouse.png', price: 20},
    {id: 3, title: 'Keyboard', foto: '../DZ_0_1/img/Keyboard.png', price: 200},
    {id: 4, title: 'Gamepad', foto: '../DZ_0_1/img/Gamepad.png', price: 50},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (title, foto, price) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <img class="blink" src = ${foto}></img>
                <p>${price} \u20bd</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = (list.map(item => renderProduct(item.title, item.foto, item.price))).join('');
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);