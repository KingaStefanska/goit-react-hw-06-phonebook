import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const changeHandler = e => {
    const value = e.target.value.toLowerCase();

    dispatch(setFilter(value));
  };

  return (
    <label>
      Find contacts by name
      <input className={css.filterInput} type="name" onChange={changeHandler} />
    </label>
  );
};

export default Filter;
