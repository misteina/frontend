import React from "react";

export default function DisplayData(props){

    const order = ['Open', 'Close', 'High', 'Low'];

    if (props.data !== null && props.data.length){
        return (
            <ul className="mt-50 slide-up-fade-in styled" id="stockData" data-testid="stock-data">
                {
                    order.map((item, index) => 
                        <li className="py-10" key={index.toString()}>
                            {`${item}: ${props.data[0][item.toLowerCase()]}`}
                        </li>
                    )
                }
            </ul>
        )
    }
    return null;
}