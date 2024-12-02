import Box from '../boxes/box';
import './filter.scss';

function Filter() {
  const filterNames = [
    { name: 'Без пересадок', id: '1' },
    { name: '1 пересадка', id: '2' },
    { name: '2 пересадки', id: '3' },
    { name: '3 пересадки', id: '4' },
  ];
  const filterEls = filterNames.map((filter) => (
    <li key={filter.id}>
      <label className={'filter__label'} htmlFor={filter.id}>
        <input
          className={'filter__input'}
          name="filter"
          id={filter.id}
          type="radio"
        />
        <p className={'filter__text'}>{filter.name}</p>
      </label>
    </li>
  ));

  return (
    <Box>
      <h2 className={'filter__title'}>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <ul className={'filter__list'}>{filterEls}</ul>
    </Box>
  );
}

export default Filter;
