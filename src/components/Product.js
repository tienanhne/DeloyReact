import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import {BsPlus, BsEyeFill} from 'react-icons/bs'

import { CartContext } from '../contexts/CartContext';

const Product = ({product}) => {
  const {id, image, category, title, price} = product
  const {addToCart} = useContext(CartContext);
  return <div>
        <div className='border border-[#e4e4e4] h-[300px] mb-4
        relative overflow-hidden group transition'>
            <div className='w-full h-full flex justify-center items-center'>
               <div className='w-[200px] mx-auto flex justify-center items-center'>
                 <img className='max-h-[160px] group-hover:scale-110 transition duration-200' src={image} alt='anh'></img>
               </div>
            </div>
            <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col gap-y-2 opacity-0 group-hover:opacity-100 transition-all daration-300 justify-center items-center'>
                <button onClick={() => addToCart(product, id)}>
                  <div className='flex justify-center items-center bg-red-500 text-white h-9 w-9'>
                    <BsPlus className='text-3xl' />                    
                  </div>
                </button>
                <Link to={`/product/${id}`} className='w-9 h-9 bg-white flex justify-center items-center text-primary drop-shadow-xl'><BsEyeFill /></Link>
            </div>
        </div>

        { /* category 7 title*/}
        <div>
          <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
          <Link  to={`/product/${id}`}>
            <h2 className='font-semibold mb-1'>{title}</h2>
            
          </Link>
          <div className='font-semibold'>$ {price}</div>
        </div>
    </div>;
};

export default Product;
