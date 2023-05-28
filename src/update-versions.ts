import fs from "fs-extra";
import path from "path";

export async function updateVersions(templatePath: string, version: string) {
  const packageJsonPath = path.join(templatePath, "package.json");
  const content = await fs.readJson(packageJsonPath, "utf-8");
  content.dependencies["@mantine/core"] = version;
  content.dependencies["@mantine/hooks"] = version;

  await fs.writeJson(packageJsonPath, content, { spaces: 2 });
}
