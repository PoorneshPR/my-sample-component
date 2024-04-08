import React from "react";
import Header from './Header.js'
import Content from "./Content.js";
import Footer from "./footer.js";
import { useState } from "react";
import { AddItem } from "./AddItem.js";

function App() {
  const [itemspropertiess, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Practice Coding",
    },
    {
      id: 2,
      checked: true,
      item: "Play Cricket",
    },
    {
      id: 3,
      checked: false,
      item: "Play football",
    },
    {
      id: 4,
      checked: false,
      item: "Learn Technology",
    },
  ]);
  
  const addItem=(item)=>{
    const id=itemspropertiess.length?itemspropertiess[itemspropertiess.length-1].id+1:1;
    const addNewItem={id,checked:false,item}
    const setToListItems=[...itemspropertiess,addNewItem]
    setItems(setToListItems)
  }
  const handleCheck = (id) => {
    console.log(id);
    const listItems = itemspropertiess.map((item) =>
      item.id == id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };
  const handleDelete = (id) => {
    console.log(id);
    const listItems = itemspropertiess.filter((item) => item.id != id);
    setItems(listItems);
  };
  const name="Poornesh";
  const [newItem,setNewItem]=useState(''); 
  const handleSubmit=(e)=>{
    addItem(newItem)
    e.preventDefault()
    console.log('submitted');
  }
  return (
    <div >
      <Header props={"Sample"}/>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}/>
      <Content
      items={itemspropertiess}
      handleCheck={handleCheck}
      handleDelete={handleDelete}/>
      <Footer/>
    </div>
  );
}

export default App;
