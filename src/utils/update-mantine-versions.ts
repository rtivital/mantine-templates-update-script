import fs from "fs-extra";
import type { Template } from "./get-templates-list.ts";

function getMantineDependencies(dependencies: any) {
  if (dependencies === undefined) return [];

  return Object.keys(dependencies).filter((dependency) =>
    dependency.startsWith("@mantine/")
  );
}

export async function updateMantineVersions(
  template: Template,
  version: string
) {
  for (const packageJsonPath of template.packageJsonPaths) {
    const content = await fs.readJson(packageJsonPath, "utf-8");

    getMantineDependencies(content.dependencies).forEach((dependency) => {
      content.dependencies[dependency] = version;
    });

    getMantineDependencies(content.devDependencies).forEach((dependency) => {
      content.devDependencies[dependency] = version;
    });

    await fs.writeJson(packageJsonPath, content, { spaces: 2 });
  }
}
