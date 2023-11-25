import { BuildPaths } from "./types/config";
import { ResolveOptions } from "webpack";

export function buildResolvers(paths: BuildPaths): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {},
  };
}
