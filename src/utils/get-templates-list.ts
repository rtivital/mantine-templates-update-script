import templates from "../templates-list.json";
import { getPath, getPaths } from "./get-path.ts";

export type Template = (typeof templates)[number];

export function getTemplatesList(): Template[] {
  return templates.map((template) => ({
    ...template,
    packageJsonPaths: getPaths(template.packageJsonPaths),
    rootPath: getPath(template.rootPath),
  }));
}
