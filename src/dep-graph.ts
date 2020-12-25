import {
  cruise,
  IReporterOutput,
  ICruiseOptions,
  ICruiseResult,
} from "dependency-cruiser";

export function collectDependencies(
  entries: string[],
  workspace: string,
  configPath?: string
): string[] {
  try {
    const cruiseOption: ICruiseOptions = {
      includeOnly: workspace,
    };
    const cruiseResult: IReporterOutput = cruise(
      entries,
      cruiseOption,
      configPath ? require(configPath).resolve : undefined
    );
    const files = (cruiseResult.output as ICruiseResult).modules.map(
      (result) => result.source
    );
    return [...entries, ...files];
  } catch (error) {
    throw error;
  }
}
