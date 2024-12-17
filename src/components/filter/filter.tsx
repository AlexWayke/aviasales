import Flex from '@Components/flex/flex';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Box from '../boxes/box';
import './filter.scss';
import { changeFilters } from '../redux/slices/filtersSlice';
import type { Filter } from '../redux/slices/filtersSlice';

function Filter() {
  const filters: Filter[] = useAppSelector((state) => state.filters.filters);

  const dispatch = useAppDispatch();

  const filterEls = filters.map((filter) => (
    <li className="filter__li" key={filter.id}>
      <label className={'filter__label'} htmlFor={filter.id}>
        <input
          className={'filter__input'}
          name="filter"
          id={filter.id}
          checked={filter.isOn}
          type="checkbox"
          onChange={() => dispatch(changeFilters(filter.id))}
        />
        <p className={'filter__text'}>{filter.name}</p>
      </label>
    </li>
  ));

  return (
    <Flex classes="filter__wrapper">
      <Box>
        <h2 className={'filter__title'}>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
        <ul className={'filter__list'}>{filterEls}</ul>
      </Box>
    </Flex>
  );
}

export default Filter;
