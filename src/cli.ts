#!/usr/bin/env node
import * as path from "path";
import minimist from "minimist";
import { check } from "./index";

const {
  _: targets,
  workspace,
  srcDir,
  onlyTemplate,
  onlyTypeScript,
  excludeDir,
  configPath,
} = minimist(process.argv.slice(2));

if (!workspace) {
  throw new Error("--workspace is required");
}

const cwd = process.cwd();

check({
  workspace: path.resolve(cwd, workspace),
  targets: targets.map((t) => path.resolve(cwd, t)),
  srcDir: srcDir && path.resolve(cwd, srcDir),
  onlyTemplate,
  onlyTypeScript,
  excludeDir,
  configPath: path.resolve(cwd, configPath),
});
