import path from "node:path";

export function getPath(filePath: string) {
  return path.join(process.cwd(), filePath);
}

export function getPaths(paths: string[]) {
  return paths.map((filePath) => getPath(filePath));
}
