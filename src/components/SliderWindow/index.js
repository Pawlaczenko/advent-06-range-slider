import React, { useState, useEffect } from 'react';
import Button from '../Button';
import PriceTag from '../PriceTag';
import SliderInput from '../SliderInput';
import styles from './_SliderWindow.module.scss';

const SliderWindow = () => {
    const [price, setPrice] = useState(0);
    const [rangeTreshold, setTreshold] = useState(10000);

    useEffect(() => {
        document.title = `Total Price: ${price / 100}`;
    }, [price])

    const handlePriceChange = (e) => {
        setPrice(e.target.valueAsNumber);
    }

    return (
        <div className={styles.wrapper}>
            <PriceTag price={price} />
            <SliderInput value={price} max={rangeTreshold} handleChange={handlePriceChange} />
            <br />
            <Button title="Buy Now" />
        </div>
    )
}

export default SliderWindow
