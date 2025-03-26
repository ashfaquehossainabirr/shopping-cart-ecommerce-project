const cartDiv = document.getElementById("cart")
const cartLength = document.querySelector(".cart-length")
const totalDisplay = document.getElementById("total")

let cart = []

function addToCart(productName, productPrice, productHref) {
    const product = { name: productName, price: productPrice, href: productHref }

    cart.push(product)
    displayCart()
}

function displayCart() {
    cartDiv.innerHTML = ''

    let total = 0

    cart.forEach((item, index) => {
        let itemDiv = document.createElement("div")

        itemDiv.className = "cart-item"

        itemDiv.innerHTML = `
                                <div>
                                    <img class="cart-img" src="${item.href}" alt="${item.name}"/>
                                </div>
                                <div>
                                    <p>Product Name: ${item.name}</p>
                                    <p>Item: 1</p>
                                    <p>Unit Price: $${item.price}</p>
                                </div>
                                <button onclick="removeFromCart(${index})">
                                    Remove
                                </button>
                            `
        
        cartDiv.appendChild(itemDiv)

        total += item.price
    })

    totalDisplay.innerHTML = total
    cartLength.innerHTML = cart.length
}

function removeFromCart(index) {
    if(window.confirm("Are you sure, you want to remove this product?")) {
        cart.splice(index, 1)
        displayCart()
    }
    
    if(cart.length === 0) {
        cartDiv.innerHTML = '<p style="font-size: 20px;">No Items Here</p>'
    }
}