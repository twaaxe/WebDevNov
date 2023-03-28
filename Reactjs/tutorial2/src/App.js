import { useState } from "react"




const state = {

  myPosts: [],

  myNames: [],

  username: 'Joe'

}


function Profile() {

  return (

    <h1>This is the Profile</h1>

  )

}




function Posts({singlePost}) {

  return (

    <ul>

      <li>{singlePost.title}</li>

    </ul>

  )

}




function App() {

  const [state, setState] = useState([])
  const [username, setUsername] = useState(undefined)
  const [isClicked, setIsClicked] = useState(false) 
  const test = "This is a test"

  const data = [] // array data to store posts

  const ClickHandler = () => { // handling click event

    fetch('https://jsonplaceholder.typicode.com/posts') // fetching JSON data from URL

      .then(res => res.json())

      .then(posts => {
        //   console.log(posts)
        // data.push(posts)
        
        //  setUsername('Dummy Data')
        setIsClicked(!isClicked)

        setTimeout(function(){
          setUsername(['a', 'b', 'c', 'd']) // save-set items 
          setState(posts) // DATA.PUSH
          setIsClicked(false)
        },5000)

      })

  }

  return (

    <div>
      <Profile />

      {console.log(data)}

      {/* {
        state.map((post, index)=>( 
        <Posts singlePost={post} key={index}/>
        ))
      } */}


      {/* {
          username?
          username.map((user, index)=>(
            <h1 key={index}> {user} </h1>
          ))
          :
          'Loading... ' 
        } */}


        {
          isClicked ?
          'loading...'
          :
          username ?
            username.map((user, index)=>(
                <h1 key={index}>{user} </h1>
            ) )
            : ''

// condition1
// true
// 
// 
// 
//           
        }
        <br/>
        <br/>

      <button onClick={ClickHandler}>Get Posts</button>
      

    </div>
   

  )

}






export default App



















