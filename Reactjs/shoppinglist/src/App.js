


function App() {
  
  return(
    <main class="my-3">
    <div class="container-md">

        <div class="row my-2">
            <div class="col-md-6">
                <div class="input-group">
                    <input type="text" class="form-control searchinput" placeholder="Search products"/>
                    <button class="btn btn-primary searchbtn" type="submit">Search</button>
                </div>
            </div>
        </div>

       
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 products">

            <div class="col">
                <div class="card h-100 bg-secondary text-light">
                    <img src="https://i.dummyjson.com/data/products/6/1.png" class="product-image"
                        alt="Product Image"/>
                    <div class="card-body">
                        <h5 class="card-title">Product Title</h5>
                        <p class="card-text">Product Description</p>
                        <a href="#" class="btn btn-primary buynow">Buy Now</a>
                    </div>
                </div>
            </div>

            

        </div>


    </div>

</main>
  )
   
}

export default App;




