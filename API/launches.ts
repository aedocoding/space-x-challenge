import { ILaunchListItem } from "../Types/types";
export const fetchLaunches = async () => {
      const launchResponse = await fetch(
        "https://api.spacexdata.com/v3/launches",
        {
          method: "GET",
          redirect: "follow",
        }
      );
      const launches = await launchResponse.json();
      const filteredLaunchList: ILaunchListItem[] = launches.map((launch) => {
        return {
          name: launch.mission_name,
          details: launch.details,
          image: launch.links.mission_patch_small,
        };
      });
      return filteredLaunchList

  };