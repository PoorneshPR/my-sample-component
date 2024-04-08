import React from "react";
import ItemsList from "./ItemsList";


const Content = ({ items,handleCheck,handleDelete }) => {

  return <main>
    {(items.length) ? (
      <ItemsList itemsproperties={items} 
      handleCheck={handleCheck}
      handleDelete={handleDelete}/>
    ) : (
      <p style={{ marginTop: 20, }}>Your  List is Empty</p>
    )}
  </main>;
};

export default Content;
