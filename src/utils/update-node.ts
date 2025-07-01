import signale from "signale";
import { writeFileSync, existsSync } from "fs";
import { join } from "path";
import type { Template } from "./get-templates-list.ts";

export async function updateNode(template: Template, version: string) {
  try {
    const nvmrcPath = join(template.rootPath, ".nvmrc");
    const fileExists = existsSync(nvmrcPath);
    writeFileSync(nvmrcPath, version + "\n", "utf8");

    if (fileExists) {
      signale.success(
        `Updated Node.js version to ${version} in ${template.name} template`
      );
    } else {
      signale.success(
        `Created .nvmrc file with Node.js version ${version} in ${template.name} template`
      );
    }
  } catch (error) {
    signale.error(
      `Failed to update Node.js version in ${template.name} template`
    );
    signale.error(error);
    process.exit(1);
  }
}
