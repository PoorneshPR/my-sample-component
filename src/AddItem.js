import { FaPlus } from 'react-icons/fa'
import React from 'react';

export const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  

    return (
        <form className='addform' onSubmit={handleSubmit}>
            <label htmlFor='addItem'>Add Item</label>
            <input type='text'
                autoFocus
                id='addItem'
               
                placeholder='AddItem'
                required
                value={newItem}
                onChange={(e)=>setNewItem(e.target.value)}/>
            <button
                type='submit'
                aria-label='Add Item'>
                <FaPlus />
            </button>
        </form>
    )
}
