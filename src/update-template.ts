import signale from "signale";
import chalk from "chalk";
import { updateVersions } from "./update-versions.ts";
import { installDependencies } from "./install-dependencies.ts";
import { commitChanges } from "./commit-changes.ts";

export async function updateTemplate(templatePath: string, version: string) {
  const templateName = templatePath.split("/").pop();
  signale.info(
    `Updating ${chalk.cyan(templateName)} template to version ${chalk.green(
      version
    )}`
  );
  await updateVersions(templatePath, version);
  await installDependencies(templatePath);
  await commitChanges(templatePath, version);
  signale.info(`Template ${chalk.cyan(templateName)} was updated`);
}
