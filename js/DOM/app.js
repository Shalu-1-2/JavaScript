let product = [
    {productName:"watch",image:'images/img7.jpg'},
    {productName:"watch1",image:'images/img11.jpg'},
    {productName:"watch2",image:'images/img7.jpg'},
    {productName:"watch",image:'images/img7.jpg'},
    {productName:"watch1",image:'images/img11.jpg'},
    {productName:"watch2",image:'images/img7.jpg'},

]
let p = document.getElementById('product')

product.forEach((item)=>{

    p.innerHTML +=`<div class="card">
    <img src = ${item.image} class="product-image" />
    <h2>${item.productName}</h2>
    <button>Add to Cart</button>
    </div>`
})