import signale from "signale";
import type { Template } from "./get-templates-list.ts";
import { execa } from "execa";

export async function updateYarn(
  template: Template,
  version: string
): Promise<boolean> {
  try {
    const { stdout } = await execa("yarn", ["--version"], {
      cwd: template.rootPath,
    });

    if (stdout.trim() === version) {
      return false;
    }

    await execa("yarn", ["set", "version", version], {
      cwd: template.rootPath,
    });

    return true;
  } catch (error) {
    signale.error(`Failed to update yarn in ${template.name} template`);
    signale.error(error);
    process.exit(1);
  }
}
