import Button from './components/button/button';
import CardTemplate from './components/card-template/card-template';
import Filter from './components/filter/filter';
import Flex from './components/flex/flex';
import FlexTemplate from './components/flex/flex-template';
import Tabs from './components/tabs/tabs';

function App() {
  return (
    <FlexTemplate classes="flex-row py-5 px-1.5">
      <Flex classes="flex-col w-96">
        <Filter />
      </Flex>
      <Flex classes="flex-col">
        <Tabs />
        <CardTemplate />
        <Button name={'ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ'}></Button>
      </Flex>
    </FlexTemplate>
  );
}

export default App;
