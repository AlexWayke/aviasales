import Button from './components/button/button';
import Filter from './components/filter/filter';
import Flex from './components/flex/flex';
import FlexTemplate from './components/flex/flex-template';
import Tabs from './components/tabs/tabs';

function App() {
  return (
    <FlexTemplate direction="row">
      <Flex classes="flex-col w-96">
        <Filter />
      </Flex>
      <Flex classes="flex-col">
        <Tabs />
        <Button name={'ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ'}></Button>
      </Flex>
    </FlexTemplate>
  );
}

export default App;
