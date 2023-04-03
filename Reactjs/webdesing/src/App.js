
function App() {
  return (
    
    <>
      <main>
        <div className="container">
        <div className="row">{/*1st row content = web design*/}
          <div className="col-md-12 text-start">
            <h1>Web Design</h1>
          </div>
        </div>
        <div className="row d-flex justify-content-evenly">{/*2nd row content = main part*/}
          <div className="col-md-3 text-end" id="leftNavbar">
            
            <ul>
              <li>Project 1</li>
              <li>Project 2</li>
              <li>Project 3</li>
              <li>Project 4</li>
            </ul>
            </div>
          <div className="col-md-9 text-center" id="mainContent">
            <div className="container">


              <div className="row">{/*Project name */}
                <div className="row">
                  <div className="col-md-4 text-center">
                    <h1>Project name</h1>
                    <a>go to website</a>
                  </div>
                  <div className="col-md-8 d-flex ">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum eaque officia sunt quasi voluptatum facere nobis illo ipsam blanditiis at quos, ducimus tenetur hic fuga adipisci ipsa soluta? Maiores, enim!</p>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <img src="https://picsum.photos/200" alt="uneimage"/>
                    </div>
                  </div>
                </div>
              </div>


              <div className="row">{/*More screenshot */}
              <div className="col-md-2 d-flex justify-content-evenly text-center">
                <img src="https://picsum.photos/id/237/200" alt="uneimage"/>
              </div>
              <div className="col-md-2 d-flex justify-content-evenly text-center">
                <img src="https://picsum.photos/200" alt="uneimage"/> 
              </div>
              <div className="col-md-2 d-flex justify-content-evenly text-center">
                <img src="https://picsum.photos/200" alt="uneimage"/>
              </div>
              <div className="col-md-2 d-flex justify-content-evenly text-center">
                <img src="https://picsum.photos/seed/picsum/200" alt="uneimage"/>
              </div>
              <div className="col-md-2 d-flex justify-content-evenly text-center">
                <img src="https://picsum.photos/200" alt="uneimage"/>
              </div>

              </div>
            </div>
          </div>
        </div>
        </div>
      </main>
    </>
  );
}

export default App;
