import renderer from "react-test-renderer";
import { ScreenType } from "../../Types/types";
import { LaunchList } from "../../Screens";
jest.useFakeTimers();

describe("<LaunchList />", () => {
  const mockNavigatorFunction = (param: ScreenType) => {};
  it("has 1 child", () => {
    const tree = renderer
      .create(<LaunchList navigatorFunction={mockNavigatorFunction} />)
      .toJSON();
    expect(tree.children.length).toBe(1);
  });
  test("renders correctly", () => {
    const tree = renderer
      .create(<LaunchList navigatorFunction={mockNavigatorFunction} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
