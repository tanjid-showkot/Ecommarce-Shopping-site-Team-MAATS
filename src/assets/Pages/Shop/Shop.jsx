// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Card from '../Home/Cards/Card';
import { toast } from 'react-hot-toast';

import { addToDb } from '../../Util/localStorage';
const Shop = () => {
    const [carts, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleClick = (product) => {
        const exist = carts.find(pd => pd._id === product._id);
        if (exist)
            toast("Product already added to cart")
        else {
            const newCart = [...carts, product];
            setCart(newCart);
            addToDb(product._id);

        }

    }




    return (
        <div>
            <div className="form-control  w-full ">
                <input type="text" placeholder="Search" className="input mx-auto m-10 input-bordered w-96" />
            </div>


            <div className=' grid grid-cols-4'>
                {
                    products.map(product => <Card
                        key={product._id}
                        product={product}
                        handleClick={handleClick}
                    ></Card>)
                }

            </div>
        </div>
    );
};

export default Shop;