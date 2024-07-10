// Jul 9, 2024
// Copy & Pasted from one of my old Repos
// Under the name "shoppingListReact"

import { useState } from 'react';

export default function ToDoOne() {
  const [itemList, setItemList] = useState([]);
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setItemList([value, ...itemList]);
    console.log('VALUE: ', value);
  };

  console.log('ITEM LIST:', itemList);

  return (
    <>
      <div className="container">
        <div className="leftSide">
          <h1>cart.</h1>
          <form onSubmit={handleSubmit}>
            <label>
              {' '}
              What do you need?
              <br />
              <input
                type="text"
                onChange={(event) => {
                  setValue(event.target.value);
                }}
              />
              <br />
            </label>
            <button type="submit">add to list</button>
          </form>
          <form>
            <button type="submit">reset</button>
          </form>
        </div>

        <div className="list">
          <h2>List</h2>
          <div className="output">
            {itemList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
