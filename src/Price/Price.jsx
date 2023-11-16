import React from 'react';
import './Price.css';
import { useState } from 'react';

const Price = () => {

    const products = [
        {name: 'appele', price: 3}, 
        {name: 'lemon', price: 4}, 
        {name: 'cake', price: 11},
        {name: 'watter', price: 1}, 
        {name: 'steak', price: 12}, 
]

    const [price, setPrice] = useState(products);

    const priceSort = () => {
        const sortedArr = [...price];
        sortedArr.sort((a, b) => a.price - b.price);
        setPrice(sortedArr)
    }

    const filterLessThanTen = () => {
        const filteredArr = price.filter(item => item.price < 10);
        setPrice(filteredArr);
    };

    const filterGreaterThanTen = () => {
        const filteredArr = price.filter(item => item.price > 10);
        setPrice(filteredArr);
    };

    const resetList = () => {
        setPrice(products);
    };

    return (
        <div className='priceBox'>
            <div className='priceList'>
                <h2>Products:</h2>
            {price.map((item, index) => (
                <div key={index}>{item.name}: {item.price}</div>
            ))}
            </div>
            <button onClick={priceSort}>Sort by price</button>
            <button onClick={filterLessThanTen}>Filter less 10</button>
            <button onClick={filterGreaterThanTen}>Filter more 10</button>
            <button onClick={resetList}>Reset List</button>
        </div>
    );
};

export default Price;