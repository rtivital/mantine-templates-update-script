import chalk from "chalk";
import { execa } from "execa";
import signale from "signale";
import type { Template } from "./get-templates-list.ts";

export async function commitChanges(template: Template, commitMessage: string) {
  try {
    await execa("git", ["add", "."], { cwd: template.rootPath });
    await execa("git", ["commit", "-m", commitMessage], {
      cwd: template.rootPath,
    });
    await execa("git", ["push"], { cwd: template.rootPath });
  } catch (error) {
    signale.error(
      `Failed to update template: ${chalk.red(
        template.rootPath.split("/").pop()
      )}`
    );
    signale.error(error);
  }
}
