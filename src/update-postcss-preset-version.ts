import fs from "fs-extra";
import path from "path";

export async function updatePostcssPresetVersion(
  templatePath: string,
  version: string
) {
  const packageJsonPath = path.join(templatePath, "package.json");
  const content = await fs.readJson(packageJsonPath, "utf-8");
  content.devDependencies["postcss-preset-mantine"] = version;

  await fs.writeJson(packageJsonPath, content, { spaces: 2 });
}
