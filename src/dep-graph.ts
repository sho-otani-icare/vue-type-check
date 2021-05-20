import {
  cruise,
  IReporterOutput,
  ICruiseResult,
} from "dependency-cruiser";

export function collectDependencies(
  entries: string[],
  configPath?: string
): string[] {
  try {
    const cruiseResult: IReporterOutput = cruise(
      entries,
      {},
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
