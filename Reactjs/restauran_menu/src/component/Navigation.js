import { useState } from 'react'
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import { Link } from 'react-router-dom';


export default function Navigation(){

    var [state, setState] = useState({
        todo: false,
        breakfast : false,
        lunch : false
    })

  

    return(
        
        
        <div className="col-md-12 text-center" id="menu-filters">

            <div className="col-md-12 text-center  marb-35">
              <h1 className="header-h">Menu las carnes del Nahum</h1>
            </div>
            <ul>
                <li><Link to={"/"} className={state.todo ? "active filter" : ""} onClick={() => setState({todo: true, breakfast: false, lunch: false})} data-filter=".menu-restaurant">Todo</Link></li>
			    <li><Link to={"/Breakfastmenu"} className={state.breakfast ? "active filter" : ""} onClick={() => setState({todo: false, breakfast: true, lunch: false})} data-filter=".breakfast">Breakfast</Link></li>
				<li><Link to={"/Lunchmenu"} className={state.lunch ? "active filter" : ""} onClick={() => setState({todo: false, breakfast: false, lunch: true})}  data-filter=".lunch">Lunch</Link></li>

            </ul>
        </div>
    )
}