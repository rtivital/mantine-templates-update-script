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
): Promise<boolean> {
  let changed = false;

  for (const packageJsonPath of template.packageJsonPaths) {
    const content = await fs.readJson(packageJsonPath, "utf-8");
    let fileChanged = false;

    getMantineDependencies(content.dependencies).forEach((dependency) => {
      if (content.dependencies[dependency] !== version) {
        content.dependencies[dependency] = version;
        fileChanged = true;
      }
    });

    getMantineDependencies(content.devDependencies).forEach((dependency) => {
      if (content.devDependencies[dependency] !== version) {
        content.devDependencies[dependency] = version;
        fileChanged = true;
      }
    });

    if (fileChanged) {
      await fs.writeJson(packageJsonPath, content, { spaces: 2 });
      changed = true;
    }
  }

  return changed;
}
