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
  const [username, setUsername] = useState('ugbieef dd')

  const test = "This is a test"

  const data = [] // array data to store posts

  const ClickHandler = () => { // handling click event

    fetch('https://jsonplaceholder.typicode.com/posts') // fetching JSON data from URL

      .then(res => res.json())

      .then(posts => {

        // console.log(posts)

        // data.push(posts)
        setState(posts) //data push
        setUsername('Dummy Data')

      })

  }

  return (

    <div>
      <Profile />
      
      <h1>
        {username}
      </h1>
      <button onClick={ClickHandler}>Get Posts</button>

      {console.log(data)}

      {
        state.map((post, index)=>( 
        <Posts singlePost={post} key={index}/>
        ))
      }

    </div>
   

  )

}






export default App



















