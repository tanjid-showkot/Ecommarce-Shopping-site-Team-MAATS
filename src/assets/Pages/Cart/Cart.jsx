// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { addToDbTotal, getShoppingCart, removeFromDb } from '../../Util/localStorage';
import { Link } from 'react-router-dom';



const Cart = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCart] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    useEffect(() => {
        const storedCart = getShoppingCart();
        const storedCartArray = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product._id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;

                storedCartArray.push(addedProduct);
            }
        }

        setCart(storedCartArray);
    }, [products])

    const removeProduct = (cart) => {
        const newCart = carts.filter(pd => pd._id !== cart._id);
        setCart(newCart);
        removeFromDb(cart._id);
    }
    const total = carts.reduce((previous, product) => previous + product.price * product.quantity + 12, 0);



    return (
        <div>
            <p className=' text-red-800'>NB: Currently you can order only one item of a same product. As we are facing product shortage. Sorry for the inconvenience!!!  </p>
            <div className='h-[1200px] grid grid-cols-2 '>
                <div>
                    {carts.map(cart => <div className="overflow-x-auto p-10" key={cart._id}>
                        <table className="table">
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={cart.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{cart.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-ghost badge-sm">{cart.quantity}</span>
                                    </td>
                                    <td>{cart.price}</td>
                                    <th>
                                        <button onClick={() => (removeProduct(cart))} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">X</button>
                                    </th>
                                </tr>

                            </tbody>

                        </table>
                    </div>


                    )}
                </div>

                <div className=' bg-secondary m-6 rounded-lg'>
                    <p className=' h-9  text-center text-2xl font-bold m-20'>Oder Summary</p>
                    <p className=' text-center font-bold'>Items Ordered: {carts.length}</p>
                    <p className=' text-center font-bold'>Shipping Cost: 12</p>

                    <p className='text-center font-bold text-xl'>Total: {total}</p>
                    <Link to='/placeorder' onClick={() => addToDbTotal(total)} disabled={carts.length === 0} className="btn btn-primary m-44">Place Order</Link>

                </div>

            </div>

        </div>
    );
};

export default Cart;





