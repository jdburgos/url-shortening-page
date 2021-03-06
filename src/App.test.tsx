/** React core **/
import { render } from 'react-dom';

/** Dependencies **/
import { BrowserRouter } from 'react-router-dom';

/** Components **/
import App from './App';

describe('App', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      div,
    );
  });
});
