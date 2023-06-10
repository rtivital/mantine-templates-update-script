import signale from "signale";
import chalk from "chalk";
import { installDependencies } from "./install-dependencies.ts";
import { commitChanges } from "./commit-changes.ts";
import { cleanTemplate } from "./clean-template.ts";

type UpdateVersions = (templatePath: string, version: string) => Promise<void>;

export async function updateTemplate(
  templatePath: string,
  version: string,
  updateVersions: UpdateVersions
) {
  const templateName = templatePath.split("/").pop();
  signale.info(
    `Updating ${chalk.cyan(templateName)} template to version ${chalk.green(
      version
    )}`
  );
  await cleanTemplate(templatePath);
  await updateVersions(templatePath, version);
  await installDependencies(templatePath);
  await commitChanges(templatePath, version);
  signale.info(`Template ${chalk.cyan(templateName)} was updated`);
}
