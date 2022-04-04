import * as React from "react";
import { ILaunchListItem, ScreenType } from "../../Types/types";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import LaunchListItem from "./LaunchListItem";
interface LaunchListPaginatedProps {
  launchListItems: ILaunchListItem[];
  navigatorFunction: (param: ScreenType) => void;
}
type pageNumberType = 1 | 2 | 3 | 4 | 5;
const LaunchListPaginated: React.FunctionComponent<
  LaunchListPaginatedProps
> = ({ launchListItems, navigatorFunction }) => {
  const [pageNumber, setPageNumber] = React.useState<pageNumberType>(1);
  const paginationMap: { [key: number]: number[] } = {
    1: [0, 4],
    2: [5, 9],
    3: [10, 14],
    4: [15, 19],
    5: [20, 24],
  };
  const pageNumberList: pageNumberType[] = [1, 2, 3, 4, 5];
  return (
    <View style={styles.wrapper}>
      {launchListItems.map((item, idx: number) => {
        if (
          paginationMap[pageNumber][0] <= idx &&
          idx <= paginationMap[pageNumber][1]
        )
          return (
            <LaunchListItem
              key={`${idx}-${item.name}`}
              launchListItem={item}
            />
          );
      })}
      <View style={styles.paginatorSelectContainer}>
        <View />
        <View style={styles.pageNumbersContainer}>
          {pageNumberList.map((number: pageNumberType, idx: number) => (
            <TouchableOpacity
              key={`${number}-${idx}`}
              onPress={() => setPageNumber(number)}
            >
              <Text
                style={
                  number == pageNumber
                    ? styles.pageNumberUnderline
                    : styles.pageNumber
                }
              >
                {number}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity onPress={() => navigatorFunction("CreateLaunch")}>
          <Text style={styles.addLaunchIcon}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LaunchListPaginated;
const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  paginatorSelectContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 10,
  },
  pageNumbersContainer: {
    flexDirection: "row",
  },
  pageNumberUnderline: {
    textDecorationLine: "underline",
    paddingHorizontal: 10,
  },
  pageNumber: { paddingHorizontal: 10 },
  addLaunchIcon: { fontSize: 30 },
});
