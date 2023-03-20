// API documentation: https://dummyjson.com/docs/products

// 1. Find elements
const searchinput = document.querySelector(".searchinput");
// const searchbutton = document.querySelector(".searchbutton");
const ListOfProducts = document.querySelector(".products");
const CartSummary = document.querySelector(".cart-summary");
const TotalPrice = document.querySelector(".total_price");
let Total=0;

// 2. Create a function to fetch products from the API and display them in the DOM for home page 
const fetchProducts = async () => {
    // ss
    const demande = await fetch('https://dummyjson.com/products')
    const jsoned = await demande.json()
    // console.log(jsoned)
    return jsoned;

};


// 3. Create a function to display products in the DOM
const displayProducts = (products) => {

    products.forEach(prod => {
        const model = document.createRange().createContextualFragment(`<div class="col">
        <div class="card h-100 bg-secondary text-light">
            <img src="${prod.thumbnail}" class="product-image"
                alt="Product Image">
            <div class="card-body">
                <h5 class="card-title">${prod.title}</h5>
                <p class="card-text">${prod.description}</p>
                <a href="#" class="btn btn-primary buynow">Buy Now</a>
            </div>
        </div>
    </div>`)
    ListOfProducts.appendChild(model)
    });

};


// 4. Create DOMContentLoaded event listener to display products on home page
document.addEventListener("DOMContentLoaded", async () => {
    //Frst you get the datas
  let allProducts = await fetchProducts()
    //Then you display the product
  displayProducts(allProducts.products)
});



// 5. Create a function to fetch products from the API and display them in the DOM for search page
const fetchSearchProducts = async (searchTerm) => {
    let res = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)//why search?q= + variable
    let data = res.json()
    return data
}

// 6. Create keyup event listener to search products
searchinput.addEventListener("keydown", async (e) => {
 
    //remove everything
    while (ListOfProducts.firstChild) {
        ListOfProducts.removeChild(ListOfProducts.firstChild)
    }

    //display the Research
    let allProducts = await fetchSearchProducts(e.target.value)
    displayProducts(allProducts.products)

    if(e.target.value ==""){
        let previousAllProduct = await fetchProducts()
        displayProducts(previousAllProduct)
    }
   
});

// 7. Create a function to fetch single product information 
const fetchSingleProduct = async (id) => {
   let response = await fetch(`https://dummyjson.com/products/${id}`)
   let jsoned = response.json()
   return jsoned;
};

// 8. Create a function to add products to the cart (innerHTML allowed)
const addToCart = (product) => {
  
};

// 9. Create click event listener to add products to the cart
ListOfProducts.addEventListener("click", async(e) => {

});