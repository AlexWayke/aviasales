import './tabs.scss';

function Tabs() {
  const tabs = [
    { id: 12, name: 'САМЫЙ ДЕШЕВЫЙ' },
    { id: 22, name: 'САМЫЙ БЫСТРЫЙ' },
    { id: 32, name: 'ОПТИМАЛЬНЫЙ' },
  ];
  const tabsEls = tabs.map((tab) => (
    <li key={tab.id} className="tabs__li">
      <button className="tabs__btn">
        <p className="tabs__text">{tab.name}</p>
      </button>
    </li>
  ));

  return <ul className="tabs__list">{tabsEls}</ul>;
}

export default Tabs;
