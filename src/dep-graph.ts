import {
  cruise,
  IReporterOutput,
  ICruiseOptions,
  ICruiseResult,
} from "dependency-cruiser";

const CRUISE_OPTION: ICruiseOptions = {
  includeOnly: "app/frontend",
};

export function collectDependencies(
  entries: string[],
  configPath?: string
): string[] {
  try {
    const cruiseResult: IReporterOutput = cruise(
      entries,
      CRUISE_OPTION,
      configPath ? require(configPath).resolve : undefined
    );
    const files = (cruiseResult.output as ICruiseResult).modules.map(
      (result) => result.source
    );
    return files;
  } catch (error) {
    throw error;
  }
}
