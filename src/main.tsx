import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './tailwind.scss';
import store from './components/redux/store';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  throw new Error('Root element not found');
}
