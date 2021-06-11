import React from "react";
import Error from "../error/error";
import NoResult from "../no-result/no-result";
import DisplayData from "../display-data/display-data";
import "./index.css";

export default function StockData() {

    const [date, setDate] = React.useState('');
    const [error, setError] = React.useState('');
    const [data, setData] = React.useState(null);

    const getDate = (e) => {
        setDate(e.target.value);
    }

    const submitDate = () => {
        const dateFormat = /^([1-9]|[1-2][0-9]|3[0-1])-(January|February|March|April|May|June|July|August|September|October|November|December)-((19|20)[0-9][0-9])$/i;
        if (dateFormat.test(date)){
            setError('');
            fetch(
                `https://jsonmock.hackerrank.com/api/stocks?date=${date}`
            ).then(
                res => res.json()
            ).then(
                data => setData(data.data),
                (error) => setError(error)
            );
        } else {
            setError('Invalid date format specified');
        }
    }

    return (
        <div className="layout-column align-items-center mt-50">
            <Error show={error} />
            <section className="layout-row align-items-center justify-content-center">
                <input type="text" onChange={getDate} value={date} className="large" placeholder="5-January-2000" id="app-input" data-testid="app-input"/>
                <button onClick={submitDate} className="" id="submit-button" data-testid="submit-button">Search</button>
            </section>
            <DisplayData data={data} />
            <NoResult data={data} />
        </div>
    );
}
