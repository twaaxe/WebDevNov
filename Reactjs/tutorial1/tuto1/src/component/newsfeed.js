function Newsfeed(){
    const handleclick = ()=>console.log('ONCLICK')
    const mouseOver = ()=>alert('ONMOUSEOVER')
    const handleNewsData = ()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => console.log(data))
    }
    




    return(

        <ul>
            <li onClick={handleclick}>news1</li>
            <li onMouseOver={mouseOver}>news2</li>
            <li onClick={handleNewsData}>news3</li>
            <li>news4</li>
        </ul>

    )
}

export default Newsfeed


