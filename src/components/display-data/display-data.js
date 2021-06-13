import React from "react";

export default function DisplayData(props){

    const order = ['Open', 'Close', 'High', 'Low'];

    if (props.data !== null){
        if (props.data.length){
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
        } else {
            return <div className="mt-50 slide-up-fade-in" id="no-result" data-testid="no-result"><b>No Results Found</b></div>
        }
    }
    return null;
}