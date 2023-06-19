// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {
    // eslint-disable-next-line react/prop-types
    const { name, img, price, ratings } = props.product;

    return (
        <div className="card card-compact  mb-10 rounded-3xl h-96 p-0 bg-base-100">
            <figure><img className='w-full ' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2>
                <p className=' font-bold text-xl'>Price: ${price}</p>
                <p className='font-bold text-xl'>Rating:<FontAwesomeIcon icon={faStar} spin spinReverse size={"x"} style={{ color: "#4eb8dd", }} />
                    {ratings}</p>
                <div className="card-actions justify-end">
                    <button className="btn w-full bottom-0 text-white btn-primary">Watch Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;

