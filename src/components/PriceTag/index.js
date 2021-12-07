import React from 'react';
import styles from './_PriceTag.module.scss';

const PriceTag = ({ price }) => {
    const dollars = (price / 100).toFixed(2);
    return (
        <div className={styles.amount}>
            <sup className={styles.dollar_sign}>$</sup>
            <span className={styles.dollars}>{dollars}</span>
        </div>
    )
}

export default PriceTag
