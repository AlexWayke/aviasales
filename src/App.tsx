import CardTemplate from '@Components/card-template/card-template';
import Error from '@Components/error/error';
import Filter from '@Components/filter/filter';
import Flex from '@Components/flex/flex';
import Header from '@Components/header/header';
import PageTemplate from '@Components/page-template/page-template';
import Preloader from '@Components/preloader/preloader';
import Tabs from '@Components/tabs/tabs';
import { useAppSelector } from './hooks';

function App() {
  const status = useAppSelector((state) => state.tickets.status);
  const isError = useAppSelector((state) => state.error.error);
  const errorStatus = useAppSelector((state) => state.error.status);

  return (
    <Flex classes="flex-col">
      <Header />
      {isError && <Error status={errorStatus} />}
      <PageTemplate>
        <Filter />
        <Flex classes="flex-col">
          <Tabs />
          <Preloader status={status} />
          {!isError && <CardTemplate />}
        </Flex>
      </PageTemplate>
    </Flex>
  );
}

export default App;
