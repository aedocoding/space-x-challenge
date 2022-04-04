import * as React from "react";
import { ILaunchListItem } from "../../Types/types";
import { LaunchDetails } from "../LaunchDetails";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";

interface LaunchListItemProps {
  launchListItem: ILaunchListItem;
}

const LaunchListItem: React.FunctionComponent<LaunchListItemProps> = ({
  launchListItem,
}) => {
  const { name, image, details } = launchListItem;
  const [openLaunch, setOpenLaunch] = React.useState<boolean>(false);
  if (!openLaunch)
    return (
      <TouchableOpacity style={{ flex: 1 }} onPress={() => setOpenLaunch(true)}>
        <View style={styles.launchItemContainer}>
          <Image
            resizeMode={"contain"}
            style={{ height: 50, width: 50 }}
            source={{ uri: image }}
          />
          <View style={styles.launchItemTextContainer}>
            <Text>{name}</Text>
            <Text>
              {details && details.length > 0 ? details : "No details found"}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  else if (openLaunch)
    return (
      <LaunchDetails
        openLaunchState={openLaunch}
        openLaunchSetter={setOpenLaunch}
        launchListItem={launchListItem}
      />
    );
};

export default LaunchListItem;
const styles = StyleSheet.create({
  launchItemContainer: {
    flexDirection: "row",
    overflow: "scroll",
    padding: 10,
  },
  launchItemTextContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: 300,
    paddingHorizontal: 10,
  },
});
