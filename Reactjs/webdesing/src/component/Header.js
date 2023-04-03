export default function Header(){

    return(
        <div className="row  my-3 p-2">
            <div className="d-flex justify-content-start col-md-3 text-center headerButton">
                <div id="abouKero">About Kero</div>
            </div>
            <div className="col-md-9  d-flex justify-content-around headerButton" >
                <div>user inteface</div>
                <div>web design</div>
                <div>programming</div>
            </div>
        </div>
    )
}