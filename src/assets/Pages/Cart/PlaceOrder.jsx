import React from 'react';
import { getTotal } from '../../Util/localStorage';


const PlaceOrder = () => {
    const total = getTotal();
    console.log(total);



    return (
        <div>
            <h1>Oder confirmation</h1>
            <p>Payment method</p>
            <p>Cash On Delivery</p>
            <p>Address</p>
            <p>Phone Number</p>






        </div>
    );
};

export default PlaceOrder;
