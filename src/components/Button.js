import { useState } from 'react';

function Button(data) {
  const { getanswer } = data;
  const [items, setItems] = useState('');
  const [str, setStr] = useState('0');
  const [term, setTerm] = useState('');
  const [store, setStore] = useState('');

  const setnumber = (value) => {
    const item = items === '0' ? value : `${items}${value}`;
    setItems(item);
    const temp = `${store}${item}`;
    setStr(temp);
    setTerm(temp);
  };
  const setclear = () => {
    setItems('');
    setStr(0);
    setTerm('');
    setStore('');
  };
  const setequal = () => {
    if (items === '') return;
    const temp = term;
    setclear();
    const result = getanswer(temp);
    setStr(result);
  };
  const setoperator = (op) => {
    if (term === '') return;
    const temp = `${term}${op}`;
    setStr(temp);
    setStore(temp);
    setItems('');
  };

  const setdot = () => {
    if (items.includes('.')) return;
    if (items === '') {
      setnumber('0.');
    } else {
      setnumber('.');
    }
  };

  const setsign = () => {
    if (items === '') return;
    let item;
    if (items.includes('-')) {
      item = items.substring(1);
    } else {
      item = `-${items}`;
    }
    setItems(item);
    const temp = `${store}${item}`;
    setStr(temp);
    setTerm(temp);
  };
  return (
    <div className="grid-calculator">
      <button type="button" className="input button items">
        {str}
      </button>
      <button type="button" className="clear button items" onClick={setclear}>
        AC
      </button>
      <button
        type="button"
        onClick={() => setsign()}
        className="sign button items"
      >
        +/-
      </button>
      <button
        type="button"
        onClick={() => setoperator('%')}
        className="module button operator"
      >
        %
      </button>
      <button
        type="button"
        onClick={() => setoperator('÷')}
        className="divided operator button"
      >
        ÷
      </button>
      <button
        type="button"
        className="seven button number"
        onClick={() => setnumber('7')}
      >
        7
      </button>
      <button
        type="button"
        className="eight button number"
        onClick={() => setnumber('8')}
      >
        8
      </button>
      <button
        type="button"
        onClick={() => setnumber('9')}
        className="nine button number"
      >
        9
      </button>
      <button
        type="button"
        onClick={() => setoperator('x')}
        className="times button operator"
      >
        x
      </button>
      <button
        type="button"
        onClick={() => setnumber('4')}
        className="four button number"
      >
        4
      </button>
      <button
        type="button"
        onClick={() => setnumber('5')}
        className="five button number"
      >
        5
      </button>
      <button
        type="button"
        onClick={() => setnumber('6')}
        className="six button number"
      >
        6
      </button>
      <button
        type="button"
        onClick={() => setoperator('-')}
        className="minus operator button"
      >
        -
      </button>
      <button
        type="button"
        onClick={() => setnumber('3')}
        className="three button number"
      >
        3
      </button>
      <button
        type="button"
        onClick={() => setnumber('2')}
        className="two button number"
      >
        2
      </button>
      <button
        type="button"
        onClick={() => setnumber('1')}
        className="one button number"
      >
        1
      </button>
      <button
        type="button"
        onClick={() => setoperator('+')}
        className="plus operator button"
      >
        +
      </button>
      <button
        type="button"
        onClick={() => setnumber('0')}
        className="zero button number"
      >
        0
      </button>
      <button
        type="button"
        onClick={() => setdot()}
        className="dot button items"
      >
        .
      </button>
      <button
        type="button"
        onClick={() => setequal()}
        className="equal button items"
      >
        =
      </button>
    </div>
  );
}

export default Button;
