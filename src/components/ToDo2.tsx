// Jul 9, 2024
// used ToDo1 file as reference
// heavily relied on it too, whoops
// also this is 0 styling

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

    if (event?.target.value === '') {
      alert('please type something');
      alert('another clue!');
    } else {
      setItemList(value);

      setItemList([inputValue, ...itemList]);
      setInputValue(' ');
    }
  };

  const clearList = () => {
    setItemList([]);
  };

  return (
    <div>
      <p>to do list!</p>

      <form>
        <input type="text" onChange={onChange} value={inputValue} />
        <button onClick={onSubmit}>submit</button>
      </form>

      <div>
        {itemList.map((item, i) => (
          <div key={i}>
            <input type="checkbox" />
            <label>{item}</label>
          </div>
        ))}
      </div>

      <button onClick={clearList}>clear</button>
    </div>
  );
}
