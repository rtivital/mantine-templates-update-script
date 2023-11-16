import fs from "fs-extra";
import type { Template } from "./get-templates-list.ts";

export async function updatePostcssPresetVersion(
  template: Template,
  version: string
) {
  for (const packageJsonPath of template.packageJsonPaths) {
    const content = await fs.readJson(packageJsonPath, "utf-8");
    if (content.devDependencies?.["postcss-preset-mantine"] !== undefined) {
      content.devDependencies["postcss-preset-mantine"] = version;
      await fs.writeJson(packageJsonPath, content, { spaces: 2 });
    }
  }
}
