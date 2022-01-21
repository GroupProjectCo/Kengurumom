import { useEffect, useMemo, useState } from 'react';
import './TermsCheckbox.css';

function useTermsCheckbox(isLoaded) {
  const [checked, setChecked] = useState(false);

  const handleChange = e => {
    setChecked(e.target.checked);
  };

  useEffect(() => {
    if (isLoaded) {
      setChecked(!isLoaded);
    }
  }, [isLoaded]);

  const Checkbox = useMemo(
    () => (
      <fieldset className='terms-checkbox'>
        <label form='terms' className='terms-checkbox__label'>
          <input
            required
            id='terms'
            type='checkbox'
            checked={checked}
            className='terms-checkbox__checkbox'
            onChange={handleChange}
          />
          Я принимаю условия{' '}
          <a className='terms-checkbox__link' href='/terms-of-use' target='_blank'>
            Политики конфиденциальности
          </a>
        </label>
      </fieldset>
    ),
    [checked],
  );

  return [checked, Checkbox];
}

export default useTermsCheckbox;
