import chalk from "chalk";
import { execa } from "execa";
import signale from "signale";

export async function cleanTemplate(templatePath: string) {
  const templateName = templatePath.split("/").pop();
  try {
    await execa("git", ["clean", "-df"], { cwd: templatePath });
    await execa("git", ["checkout", "--", "."], { cwd: templatePath });
    signale.info(`Template ${chalk.cyan(templateName)} cleaned`);
  } catch (error) {
    signale.error(`Failed to update template: ${chalk.red(templateName)}`);
    console.error(error);
  }
}
