import * as React from "react";
import { ILaunchListItem } from "../../Types/types";
import { Text, Modal, Button, Image } from "react-native";

interface LaunchDetailsProps {
  openLaunchState: boolean;
  openLaunchSetter: (param: boolean) => void;
  launchListItem: ILaunchListItem;
}

const LaunchDetails: React.FunctionComponent<LaunchDetailsProps> = ({
  openLaunchState,
  openLaunchSetter,
  launchListItem,
}) => {
  const { name, image, details } = launchListItem;
  return (
    <Modal visible={openLaunchState}>
      <Image
        resizeMode={"contain"}
        style={{ height: 400, width: "100%" }}
        source={{ uri: image }}
      />
      <Text>{name}</Text>
      <Text>{details}</Text>
      <Button title={"Close"} onPress={() => openLaunchSetter(false)}></Button>
    </Modal>
  );
};

export default LaunchDetails;
