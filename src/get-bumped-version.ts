import path from "path";
import fs from "fs-extra";
import { getTemplates } from "./get-templates.ts";

export async function getBumpedVersion() {
  const templates = await getTemplates();
  const packageJson = await fs.readJson(
    path.join(templates[0], "package.json"),
    "utf-8"
  );
  const splittedVersion = packageJson.dependencies["@mantine/core"].split(".");
  splittedVersion[splittedVersion.length - 1] = (
    parseInt(splittedVersion[splittedVersion.length - 1]) + 1
  ).toString();
  return splittedVersion.join(".");
}
