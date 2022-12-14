import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Myorders = () => {
    const [order, setOrder] = useState([])
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        const getOrders = async() =>{
            const email = user.email
            const url = `https://manufacturer-0397.onrender.com/myOrder?email=${email}`
            const {data} = await axios.get(url , {
                headers : {
                    authorization : `bearer ${localStorage.getItem("accessToken")}`
                }
            } )
            setOrder(data)
        }
        getOrders()
            
               

    }, [user])

    const handleDelete = id => {
        const proceed = window.confirm('are you sure?')
        if (proceed) {
            const url = `https://manufacturer-0397.onrender.com/myOrder/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = order.filter(product => product._id !== id);
                    setOrder(remaining);
                })

        }
    }
    return (
        <div>
            <div>
                <div class="overflow-x-auto w-full">
                    <table class="table w-full">
                        <div class="overflow-x-auto w-full">
                            <table class="table w-full">
                                <thead>
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" class="checkbox" />
                                            </label>
                                        </th>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th><div class="form-control">
                                            <div class="input-group">
                                                <input  type="text" placeholder="Search???" class="input input-bordered" />
                                                <button class="btn btn-square">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                                </button>
                                            </div>
                                        </div></th>
                                        <th>Payment</th>
                                    </tr>
                                </thead>

                                {
                                    order.map(product => <>
                                        <tbody>
                                            <tr>
                                                <th>
                                                    <label>
                                                        <input type="checkbox" class="checkbox" />
                                                    </label>
                                                </th>
                                                <td>
                                                    <div class="flex items-center space-x-3">
                                                        
                                                        <div>
                                                            <div class="font-bold">{product.title}</div>
                                                            
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {product.quantity}

                                                </td>
                                                <td>{product.price}$</td>
                                                <td>
                                                    {!product.paid && <button onClick={() => handleDelete(product._id)} class="btn btn-ghost btn-xs">Cancel</button>}
                                                </td>
                                                <td>
                                                    {(product.price && !product.paid) && <Link to={`/dashboard/payment/${product._id}`} ><button  class="btn btn-ghost btn-xs">pay</button></Link>}
                                                    {(product.price && product.paid) && <span  class="text-cyan-400 font-bold">Paid</span>}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </>

                                    )
                                }



                            </table>
                        </div>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default Myorders;