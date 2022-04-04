import renderer from "react-test-renderer";
import { ILaunchListItem } from "../../Types/types";
import { LaunchDetails } from "../../Screens";
jest.useFakeTimers();

describe("<LaunchDetails />", () => {
  const mockOpenLaunchState: boolean = false;
  const mockOpenLaunchSetter = (param: boolean) => {};
  const mockLaunchListItem: ILaunchListItem = {
    name: "Mock Launch",
    image:
      "http://www.nasa.gov/sites/default/files/thumbnails/image/42374725534_a653d1b7cb_k.jpg",
    details: "Mock Details",
  };
  it("has 1 child", () => {
    const tree = renderer
      .create(
        <LaunchDetails
          launchListItem={mockLaunchListItem}
          openLaunchState={mockOpenLaunchState}
          openLaunchSetter={mockOpenLaunchSetter}
        />
      )
      .toJSON();
    expect(tree.children.length).toBe(4);
  });
  test("renders correctly", () => {
    const tree = renderer
      .create(
        <LaunchDetails
          launchListItem={mockLaunchListItem}
          openLaunchState={mockOpenLaunchState}
          openLaunchSetter={mockOpenLaunchSetter}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
