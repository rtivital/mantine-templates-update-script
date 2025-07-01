import signale from "signale";
import { writeFileSync, existsSync } from "fs";
import { join } from "path";
import type { Template } from "./get-templates-list.ts";

export async function updateNode(template: Template, version: string) {
  try {
    const nvmrcPath = join(template.rootPath, ".nvmrc");

    // Check if .nvmrc file exists
    if (!existsSync(nvmrcPath)) {
      signale.warn(
        `No .nvmrc file found in ${template.name} template, skipping Node.js version update`
      );
      return;
    }

    // Write the new Node.js version to .nvmrc file
    writeFileSync(nvmrcPath, version + "\n", "utf8");

    signale.success(
      `Updated Node.js version to ${version} in ${template.name} template`
    );
  } catch (error) {
    signale.error(
      `Failed to update Node.js version in ${template.name} template`
    );
    signale.error(error);
    process.exit(1);
  }
}
