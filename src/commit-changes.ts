import chalk from "chalk";
import { execa } from "execa";
import signale from "signale";

export async function commitChanges(templatePath: string, version: string) {
  try {
    await execa("git", ["add", "."], { cwd: templatePath });
    await execa(
      "git",
      ["commit", "-m", `Update @mantine/* dependencies to version ${version}`],
      { cwd: templatePath }
    );
    await execa("git", ["push"], { cwd: templatePath });
  } catch (error) {
    signale.error(
      `Failed to update template: ${chalk.red(templatePath.split("/").pop())}`
    );
    console.error(error);
  }
}
