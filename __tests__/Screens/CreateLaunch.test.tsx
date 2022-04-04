import renderer from "react-test-renderer";
import { ScreenType } from "../../Types/types";
import { CreateLaunch } from "../../Screens";
jest.useFakeTimers();

describe("<CreateLaunch />", () => {
  const mockNavigatorFunction = (param: ScreenType) => {};
  it("has 1 child", () => {
    const tree = renderer
      .create(<CreateLaunch navigatorFunction={mockNavigatorFunction} />)
      .toJSON();
    expect(tree.children.length).toBe(4);
  });
  test('renders correctly', () => {
    const tree = renderer.create(<CreateLaunch navigatorFunction={mockNavigatorFunction} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
