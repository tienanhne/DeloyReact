import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose, IoMdRemove, IoMdAdd } from 'react-icons/io'

import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {

  const {removeCart, increaseAmount, decreseAmount} = useContext(CartContext)

  const { id, title, image, price, amount } = item
  return <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full
  font-light text-gray-500'>
    <div className='w-full min-h-[150px] flex items-center gap-x-4'>
      <div>
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={image} />
        </Link>
      </div>
      <div className='w-full flex flex-col'>
        <div className='flex justify-between mb-2'>
          <Link to={`/product/${id}`} className='text-sm uppercase font-medium 
              max-w-[240px] text-primary hover:underline'>
            {title}
          </Link>
          <div className='text-xl cursor-pointer'>
            <IoMdClose onClick={() => removeCart(id)} className='text-gray-500 hover:text-red-500 transition' />
          </div>

        </div>
        <div className=' flex gap-x-2 h-[35px] text-sm'>
          <div className='flex flex-1 max-w-[100px] items-center h-full
                border text-primary font-medium'>
            <div onClick={() => decreseAmount(id)}  className='flex-1 flex justify-center items-center cursor-pointer h-full'>
              <IoMdRemove />
            </div>
            <div className='h-full flex justify-center items-center px-2'>{amount}</div>
            <div onClick={() => increaseAmount(id)} className='flex-1 flex h-full justify-center items-center cursor-pointer'>
              <IoMdAdd />
            </div>
          </div>



          <div className='flex-1 flex justify-around items-center'>
            $ {price}
          </div>

          <div className='flex-1 flex justify-center items-center text-primary font-medium'>
            {`$ ${parseFloat(price * amount).toFixed(2)}`}
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default CartItem;
