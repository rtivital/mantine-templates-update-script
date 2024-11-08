import signale from "signale";
import type { Template } from "./get-templates-list.ts";
import { execa } from "execa";

function getMantineDependencies(dependencies: any) {
  if (dependencies === undefined) return [];

  return Object.keys(dependencies).filter((dependency) =>
    dependency.startsWith("@mantine/")
  );
}

export async function updateYarn(template: Template, version: string) {
  try {
    await execa("yarn", ["set", "version", version], {
      cwd: template.rootPath,
    });
  } catch (error) {
    signale.error(`Failed to update yarn in ${template.name} template`);
    signale.error(error);
    process.exit(1);
  }
}