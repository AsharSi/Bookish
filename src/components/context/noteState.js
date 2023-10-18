import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

    const [cartItems, setCartItems] = useState([]);

    const [totalCost, setTotalCost] = useState(0);
    
    return (
        <noteContext.Provider value={{ cartItems, setCartItems, totalCost, setTotalCost }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;