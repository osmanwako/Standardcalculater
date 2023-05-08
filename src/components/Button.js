import { useState } from 'react';

function Button(data) {
  const [str, setStr] = useState('0');
  const [store, setStore] = useState('');
  const [operator, setOperator] = useState('');
  const [item, setItem] = useState('');
  const [sign, setSign] = useState('');
  const [stack, setStack] = useState([]);
  const [dot, setDot] = useState('.');
  const { getresult } = data;
  const reassign = () => {
    setOperator('');
    setSign('');
    setItem('');
    setDot('.');
  };
  const setclear = () => {
    reassign();
    setStr('0');
    setStore('');
    setStack([]);
  };
  const getSign = () => {
    setSign(() => (sign === '-' ? '' : '-'));
  };
  const setTerm = () => {
    const term = `${sign}${item}`;
    const operate = `${operator}`;
    if (store === '') {
      setStack([term]);
    } else {
      setStack([...stack, operate, term]);
    }
    setStore(`${store}${operator}${sign}${item}`);
  };
  const getOperator = (op) => {
    if (store === '' && item === '') return;
    if (item !== '') {
      setTerm();
      reassign();
    }
    setOperator(op);
  };
  const getItem = (num) => {
    setItem(() => `${item}${num}`);
    setStr('');
  };
  const getDot = () => {
    if (dot === '.') {
      setItem(() => (item === '' ? `${sign}0.` : `${item}.`));
      setDot('');
    }
  };
  const setequal = () => {
    let result = 'Error';
    if (operator !== '' && item !== '') {
      result = getresult([...stack, `${operator}`, `${sign}${item}`]);
    }
    setclear();
    setStr(result);
  };
  return (
    <div className="grid-calculator">
      <button type="button" className="input button items">
        {str}
        {store}
        {operator}
        {sign}
        {item}
      </button>
      <button type="button" className="clear button items" onClick={setclear}>
        AC
      </button>
      <button
        type="button"
        onClick={() => getSign()}
        className="sign button items"
      >
        +/-
      </button>
      <button
        type="button"
        onClick={() => getOperator('%')}
        className="module button operator"
      >
        %
      </button>
      <button
        type="button"
        onClick={() => getOperator('÷')}
        className="divided operator button"
      >
        ÷
      </button>
      <button
        type="button"
        className="seven button number"
        onClick={() => getItem('7')}
      >
        7
      </button>
      <button
        type="button"
        className="eight button number"
        onClick={() => getItem('8')}
      >
        8
      </button>
      <button
        type="button"
        onClick={() => getItem('9')}
        className="nine button number"
      >
        9
      </button>
      <button
        type="button"
        onClick={() => getOperator('x')}
        className="times button operator"
      >
        x
      </button>
      <button
        type="button"
        onClick={() => getItem('4')}
        className="four button number"
      >
        4
      </button>
      <button
        type="button"
        onClick={() => getItem('5')}
        className="five button number"
      >
        5
      </button>
      <button
        type="button"
        onClick={() => getItem('6')}
        className="six button number"
      >
        6
      </button>
      <button
        type="button"
        onClick={() => getOperator('-')}
        className="minus operator button"
      >
        -
      </button>
      <button
        type="button"
        onClick={() => getItem('3')}
        className="three button number"
      >
        3
      </button>
      <button
        type="button"
        onClick={() => getItem('2')}
        className="two button number"
      >
        2
      </button>
      <button
        type="button"
        onClick={() => getItem('1')}
        className="one button number"
      >
        1
      </button>
      <button
        type="button"
        onClick={() => getOperator('+')}
        className="plus operator button"
      >
        +
      </button>
      <button
        type="button"
        onClick={() => getItem('0')}
        className="zero button number"
      >
        0
      </button>
      <button
        type="button"
        onClick={() => getDot()}
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
