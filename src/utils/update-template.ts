import signale from "signale";
import chalk from "chalk";
import { installDependencies } from "./install-dependencies.ts";
import type { Template } from "./get-templates-list.ts";
import { commitChanges } from "./commit-changes.ts";
import { cleanTemplate } from "./clean-template.ts";

interface UpdateTemplateInput {
  template: Template;
  version: string;
  updateVersions: (
    template: Template,
    version: string
  ) => Promise<boolean | void>;
  commitMessage: string;
}

export async function updateTemplate({
  template,
  version,
  updateVersions,
  commitMessage,
}: UpdateTemplateInput) {
  signale.info(
    `Updating ${chalk.cyan(template.name)} template to version ${chalk.green(
      version
    )}`
  );

  await cleanTemplate(template);
  const changed = await updateVersions(template, version);

  if (changed === false) {
    signale.info(
      `Template ${chalk.cyan(template.name)} already uses version ${chalk.green(
        version
      )}, no update needed`
    );
    return;
  }

  await installDependencies(template);
  await commitChanges(template, commitMessage.replace("{{version}}", version));

  signale.info(`Template ${chalk.cyan(template.name)} has been updated`);
}
