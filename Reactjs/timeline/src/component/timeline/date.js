export default function Date (props){

   /* 

    [] -> const data = [1,2,3]      DESTRUCTRING METHODE     
            [one, two, three] = data 

    {} -> const data = {1,2,3}       DESTRUCTRING METHODE
            {one, two, three} = data 


    */
   const {date} = props



    return(
        <p className="timeline-event-thumbnail">{date}</p>
        
    )
}