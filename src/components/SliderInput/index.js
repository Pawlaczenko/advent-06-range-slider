import React from 'react';
import styles from './_SliderInput.module.scss';

const SliderInput = ({ handleChange, value, max }) => {
    return (
        <input className={styles.input} type="range" id="priceRange" min="0" max={max} step="1" onChange={handleChange} value={value} />
    )
}

export default SliderInput
