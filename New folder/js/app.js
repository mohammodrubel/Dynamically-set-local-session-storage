const addItem = ()=>{
    const inputFeld = document.getElementById('inputFeld')
    const inputValue = inputFeld.value
    displayShow(inputValue)
    addProductToCart(inputValue)


    inputFeld.value ='';
}

const displayShow = inputValue =>{
    const displayContainer = document.getElementById('products')
    const li = document.createElement('li')
    li.classList.add('list-group-item')
    li.innerText = inputValue
    displayContainer.appendChild(li)
}
// Local storage checking 

const getCart = ()=>{
    const cart = localStorage.getItem('cart')
        let cartObject;
            if(cart){
                cartObject = JSON.parse(cart) 
            }else{
                cartObject = {}
            }
        return cartObject
}
const addProductToCart = inputValue =>{
    const cart = getCart()
    cart [inputValue] = 1;
    const cartstringfy = JSON.stringify(cart)
    localStorage.setItem('cart',cartstringfy)
}