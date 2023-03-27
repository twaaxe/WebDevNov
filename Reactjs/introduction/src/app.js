import IMPOTER from './logo.jpg'
import { drink, food } from './utils/actions'
// import IMPOTER from './logo.gif'
import Profile from './component/Profile'



function App() {

  const message = "hello friend"
  const numb = [121212]
  const user = [
    {
      username: 'root', name: 'blabla',
      property3: 'value3'
    },
    { username: 'raat', name: 'bloblo', property3: 'value3.2' },
    { username: 'r00t', name: 'bleble', property3: 'value3.3' }
  ]

  const GetMessage = () => {
    return (
      <h1>Here, another message</h1>
    )
  }

  const azerty = [{ username: 'RAAT' }, { username: 'ADMIN' }]



  return (
    <>     {/* container like this are needed in React */}
      <h1>Hello world</h1>
      <h1>This is another message</h1>
      <img src={IMPOTER} width={500} />    {/* this is in the source folder, private */}
      <img src="/logo.jpg" width={300} />   {/* //this is for the public folder, everybody has access */}

      <h1>{message}</h1>
      <h1>{numb}</h1>

      {
        user.map((person, index) => (
          <div>
            <h1>{person.username}</h1>
            <h1>{person.property3}</h1>
          </div>
        ))
      }

      <GetMessage />
      <h1>{drink}-{food}</h1>
      {/* <Profile drink={"Royal"} />

      <Profile numbers={88} /> */}

      

      <Profile myname=" Dalton" programming="c++" python="flask" users={[{ username: 'root' }, { username: 'admin' }]} />
      <Profile myname="Joe " programming="JS" python="flask" users={azerty} />
    </>
  )
}


export default App