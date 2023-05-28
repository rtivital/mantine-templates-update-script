import { getTemplates } from "./get-templates.ts";
import { updateVersions } from "./update-versions.ts";
import { installDependencies } from "./install-dependencies.ts";
import { commitChanges } from "./commit-changes.ts";
import { version } from "./version.ts";

commitChanges(
  "/Users/vrtischev/code/templates-mantine/next-app-template",
  version
);
