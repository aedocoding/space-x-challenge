import * as React from "react";
import { fetchLaunches } from "../../API";
import { ScreenType } from "../../Types/types";
import { useAsync } from "../../Hooks";
import LaunchListPaginated from "./LaunchListPaginated";
import { Text } from "react-native";
interface LaunchListProps {
  navigatorFunction: (param: ScreenType) => void;
}

const LaunchList: React.FunctionComponent<LaunchListProps> = ({
  navigatorFunction,
}) => {
  const [getLaunches, loadingLaunches, launches, loadingLaunchesError] =
    useAsync({
      asyncFunction: fetchLaunches,
    });

  React.useEffect(() => {
    getLaunches();
  }, []);
  if (loadingLaunches) return <Text>Loading launches...</Text>;
  else if (launches && launches.length > 0)
    return (
      <LaunchListPaginated
        navigatorFunction={navigatorFunction}
        launchListItems={launches}
      />
    );
  else if (loadingLaunchesError)
    return <Text>{loadingLaunchesError.message}</Text>;
  else return <Text>No Launches found</Text>;
};

export default LaunchList;
