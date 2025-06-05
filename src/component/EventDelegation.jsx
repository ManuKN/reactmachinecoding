import { useState } from "react";

function EventDelegation(){
    const[content , setContent] = useState(Array.from({length:9} , (item, i) => ({value:i})))
    return(
        <div>
            {content.map((item , i) => (
                <div key={i}>
                    div{i+1}
                </div>
            ))}
        </div>
    )
}

export default EventDelegation;