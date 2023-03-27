// function Profile() {
import {newsAll,newsById,GetNewsDetail} from '../utils/newsAction'

//  return (
//      <ul>
//          <li>Test1</li>
//          <li>Test2</li>
//          <li>Test3</li>
//      </ul>
//  )
// }


// export default Profile;


function Profile(props) {

    return (
        <ul>
            <li>Test1</li>
            <li>Test2</li>
            <li>Test3</li>
            <h1>{props.drink}</h1>
            {/* <h1>{drink}</h1>
                <h1>{numbers}</h1>
                <h1>{y}</h1> */}
            {
                console.log(props)
            }
            {
                props.users.map((x, index) =>(
                    <li key={index}> {x.username}</li>
                ) )
            }
            {
                newsAll()
            }
            {
                newsById()
            }
            {
                GetNewsDetail()
            }
        </ul>
    )
}

export default Profile









