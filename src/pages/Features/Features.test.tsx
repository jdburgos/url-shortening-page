/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import Features from './Features';

describe('Features', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Features />, div);
  });
});
