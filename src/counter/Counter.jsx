import { useState, useEffect } from "react";
import "./Counter.css";
function Counter() {
    // array destructure
    const [countValue, setCountValue] = useState(0); // variable, func
    // js login here only
    const increment = () => {
        console.log("increment button clicked ");
        if (countValue < 10) {
            setCountValue(countValue + 1);
        }
    }

    const decrement = () => {
        console.log("decreme button clicked");
        if (countValue > 0) {
            setCountValue(countValue - 1);
        }
    }

    useEffect(() => {
        console.log("mutu manikanda");

    }, [])



    return (
        <div className="counter_container">
            <h2>Counter App</h2>
            <h4>Count value : {countValue}</h4>
            <div className="buttons">
                <button style={{ padding: "10px" }} onClick={increment}>+</button>
                <button style={{ padding: "10px" }} onClick={decrement} >-</button>
            </div>
        </div>
    )

}

export default Counter;