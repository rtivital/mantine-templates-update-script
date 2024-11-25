import chalk from "chalk";
import { execa } from "execa";
import signale from "signale";
import type { Template } from "./get-templates-list.ts";

export async function cleanTemplate(template: Template) {
  try {
    await execa("git", ["clean", "-df"], { cwd: template.rootPath });
    await execa("git", ["checkout", "--", "."], { cwd: template.rootPath });
    await execa("git", ["checkout", "master"], { cwd: template.rootPath });
    signale.info(`Template ${chalk.cyan(template.name)} has been cleaned`);
  } catch (error) {
    signale.error(`Failed to clean ${chalk.red(template.name)} template`);
    console.error(error);
  }
}
