import Button from './Button';
import { setprimary, setsecondary } from './operation';

function Calculator() {
  const setoperation = (arr) => {
    const terms = setprimary(arr);
    const result = terms.some((term) => term === 'Error');
    if (result) return 'Error';
    return setsecondary(terms);
  };
  return <Button getresult={setoperation} />;
}

export default Calculator;
