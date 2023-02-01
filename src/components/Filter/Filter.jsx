import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/actions';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    const value = e.target.value.toLowerCase();

    dispatch(setFilter(value));
  };

  return (
    <label>
      Find contacts by name
      <input className={css.filterInput} type="name" onChange={onChange} />
    </label>
  );
};

export default Filter;
