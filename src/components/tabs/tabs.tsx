import './tabs.scss';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSort } from '../redux/slices/sortSlice';

function Tabs() {
  const currentSort = useAppSelector((state) => state.sort.sortBy);
  const dispatch = useAppDispatch();
  return (
    <ul className="tabs__list">
      <li className="tabs__li">
        <button
          className={`tabs__btn ${currentSort === 'price' ? 'active' : ''}`}
          onClick={() => dispatch(changeSort('price'))}
        >
          <p className="tabs__text">САМЫЙ ДЕШЕВЫЙ</p>
        </button>
      </li>
      <li className="tabs__li">
        <button
          className={`tabs__btn ${currentSort === 'time' ? 'active' : ''}`}
          onClick={() => dispatch(changeSort('time'))}
        >
          <p className="tabs__text">САМЫЙ БЫСТРЫЙ</p>
        </button>
      </li>
      <li className="tabs__li">
        <button
          className={`tabs__btn ${currentSort === 'optimal' ? 'active' : ''}`}
          onClick={() => dispatch(changeSort('optimal'))}
        >
          <p className="tabs__text">ОПТИМАЛЬНЫЙ</p>
        </button>
      </li>
    </ul>
  );
}
export default Tabs;
