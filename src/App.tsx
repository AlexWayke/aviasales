import Header from '@Components/header/header';
import Button from './components/button/button';
import CardTemplate from './components/card-template/card-template';
import Filter from './components/filter/filter';
import Flex from './components/flex/flex';
import PageTemplate from './components/page-template/page-template';
import Tabs from './components/tabs/tabs';

function App() {
  return (
    <Flex classes="flex-col">
      <Header />
      <PageTemplate>
        <Filter />
        <Flex classes="flex-col">
          <Tabs />
          <CardTemplate />
          <Button name={'ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ'}></Button>
        </Flex>
      </PageTemplate>
    </Flex>
  );
}

export default App;
