import renderer from 'react-test-renderer'
import App from '../App'
jest.useFakeTimers()
describe('<App />', () => {
    it('has 1 child', () => {
      const tree = renderer.create(<App />).toJSON();
      expect(tree.children.length).toBe(1);
    });
    test('renders correctly', () => {
      const tree = renderer.create(<App />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });