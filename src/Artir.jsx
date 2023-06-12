import React, { useState, useEffect } from 'react';

function Artir() {
    const [count, setCount] = useState(0);
    let [deger, setDeger] = useState('');

    const handleClick = () => {
        setCount(count + 1);
    };
    let toplam=Number(localStorage.getItem('myCount'));
    function save() {
        toplam+=count
        setDeger((prevDeger) => prevDeger + ' - ' + count);
        const saveDataToLocalStorage = () => {
            localStorage.setItem('myCount', toplam);
        };
        saveDataToLocalStorage()
        setCount(0);
    }

    return (
        <>
            <h2>{count}</h2>
            <button id='increment' className='increment-btn' onClick={handleClick}>Artır</button>
            <button onClick={save} id='save' className='save-btn'>SAVE</button>
            <p>{deger}</p>
            <h2>Total Passengers: {toplam}</h2>
        </>
    );
}

export default Artir;