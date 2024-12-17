import Flex from '@Components/flex/flex';
import './preloader.scss';

function Preloader(props: { status: string }) {
  return (
    <Flex classes={`preloader ${props.status === 'loading' ? 'flex' : ''}`}>
      <img src="preloader.svg" alt="Logo" />
    </Flex>
  );
}

export default Preloader;
