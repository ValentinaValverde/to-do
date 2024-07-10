// Jul 9, 2024
// heavily relied on ToDo1 file

import { useState } from 'react';

export default function ToDoTwo() {
  const [inputValue, setInputValue] = useState(' ');
  const [itemList, setItemList] = useState([]);

  const onChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event?.preventDefault();

    const value = event?.target.value;

    // alert('please type something');
    // alert('another clue!');
    setItemList(value);

    setItemList([inputValue, ...itemList]);
    setInputValue(' ');
  };

  const clearList = () => {
    setItemList([]);
  };

  return (
    <div>
      <p style={{ textAlign: 'center' }}>to do list!</p>

      <form>
        <input type="text" onChange={onChange} value={inputValue} />
      </form>

      <div
        style={{
          margin: 20,
          maxWidth: 100,
        }}
      >
        {itemList.map((item, i) => (
          <div key={i}>
            <input type="checkbox" />
            <label>{item}</label>
          </div>
        ))}
      </div>

      <button onClick={onSubmit}>submit</button>
      <button onClick={clearList}>clear</button>
    </div>
  );
}
