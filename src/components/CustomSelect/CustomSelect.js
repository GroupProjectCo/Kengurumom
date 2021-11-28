import React, { useEffect, useState } from 'react';
import './CustomSelect.css';

const CustomSelect = ({ options, startValue, page, cb }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState(startValue || null);
  const [isSelectActive, setIsSelectActive] = useState(false);
  const optionsMap = {};
  Object.values(options || {})?.forEach(option => {
    optionsMap[option.value] = { ...option };
  });

  useEffect(() => {
    const handleClose = event => {
      const { classList } = event.target;
      if (!(classList.contains('select__header') || classList.contains('select__main-option'))) {
        setIsOpened(false);
        setIsSelectActive(false);
      }
    };

    document.addEventListener('click', handleClose);
    return () => {
      document.removeEventListener('click', handleClose);
    };
  }, []);

  const toggling = () => {
    setIsOpened(!isOpened);
    setIsSelectActive(!isSelectActive);
  };

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpened(false);
    setIsSelectActive(false);

    if (typeof cb === 'function') cb(value);
  };

  return (
    <section className={`select ${page && `select_${page}`}`}>
      <div className='select__wrapper'>
        <div
          className={`select__header ${
            isSelectActive && 'select__header_active select-arrow-active'
          }`}
          onClick={toggling}
        >
          <div className='select__main-option'>
            {optionsMap[selectedOption]?.label || optionsMap[startValue]?.label}
          </div>
        </div>
        <div className={`select__container ${isOpened && 'select__container_opened'}`}>
          <ul className='select__list'>
            {options?.map(option => (
              <li
                className={`select__list-item ${
                  selectedOption === option.value && 'select__list-item__active'
                }`}
                onClick={onOptionClicked(option.value)}
                key={option.value}
              >
                <span className='select__item-text'>{option.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CustomSelect;
