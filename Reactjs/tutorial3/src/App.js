
function App() {

  const handleEventVirtual = (e) => {
    
    const {name, value} = e.target
    let obj={}
    if(name ==''){
      obj={
        'selectedoption' : value
      }
    }
    obj={
      [name]:value
    }
    console.log(obj)
  }



  return (
    <div className="container">
        <div className="row align-items-center my-5 justify-content-evenly ">
            <div className="col-md-5 text-light lh-lg" style={{'backgroundColor':'lightblue '}}>
                <h1>Let's work together</h1>
                <p className="fw-lighter" style={{'color':'blue '}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quia, alias molestias minima, animi nisi dolor corrupti culpa sapiente iste ullam perspiciatis sunt. Magnam nobis illo, corporis consectetur autem impedit?</p>
                <br/>
                <p className="fw-lighter">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet tempora repudiandae doloremque, nisi adipisci quis est ex fugiat saepe, iste harum. Ut accusantium natus modi quis perspiciatis inventore temporibus suscipit.</p>
                <br/>
                <p className="fw-lighter">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet tempora repudiandae doloremque, nisi adipisci quis est ex fugiat saepe, iste harum. Ut accusantium natus modi quis perspiciatis inventore temporibus suscipit.</p>
            </div>

            <div className="col-md-5">
                <form className="container" action="" method="" id="formContainer">
                    <h5 className="text-center py-3 fw-light py-4">How can we help?</h5>

                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label"> Name *</label>
                            <input name ="firstname" type="text" className="form-control" onChange={handleEventVirtual} id="" placeholder="Your name" required/>
                          </div>

                          <div className="col-md-6">
                            <label htmlFor="exampleInputEmail1" className="form-label"> Organisation *</label>
                            <input type="text" name="organisation" onChange={handleEventVirtual} className="form-control" id="" placeholder="Your organisation"/>
                          </div>
                    </div>

                    <div className="row">
                        <div className="my-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email * </label>
                            <input type="email" name="email" onChange={handleEventVirtual} className="form-control" id="" placeholder="Your email adress" required/>
                          </div>
                    </div>

                    <div className="row my-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Project Description * </label>
                        <div className="form-floating">
                            <textarea className="form-control" name="textarea" onChange={handleEventVirtual}  id="floatingTextarea2" style={{'height': '200px'}} required></textarea>
                        </div>
                    </div>

                    <div className="row my-3">
                        <div className="col-md-6">
                            <label htmlFor="budget" className="form-label">Budget</label>
                            <br/>
                            <select className="form-select" name="budget" onChange={handleEventVirtual}>
                                <option defaultValue={"choose"}> Choose a budget</option>
                                <option value="abc">abc</option>
                                <option value="dec">def</option>
                                <option value="ghi">ghi</option>
                            </select>
                            
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="Target Lunch" className="form-label">Target Lunch</label>
                            <br/>
                            <select className="form-select" name="budget" onChange={handleEventVirtual}>
                                <option disabled defaultValue> Example: January 15th</option>
                                <option value="1">azerty</option>
                                <option value="2">qwerty</option>
                                <option value="3">qsdf</option>
                                <option value="4">wyz</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="row">
                        <button type="submit" form="form1" value="Submit" id="submitButton" className="btn my-4 mb-5">Send Message</button> 
                    </div>

                </form>
            </div>
        </div>
    </div>

  );
}

export default App;

