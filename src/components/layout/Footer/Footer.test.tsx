/** React core **/
import { render } from 'react-dom';

/** Dependencies **/
import { BrowserRouter } from 'react-router-dom';

/** Components **/
import { Footer } from './Footer';

describe('Footer', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
      div,
    );
  });
});
