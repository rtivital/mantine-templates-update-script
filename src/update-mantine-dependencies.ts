import { updateTemplate } from "./utils/update-template.ts";
import { getTemplatesList } from "./utils/get-templates-list.ts";
import { updateMantineVersions } from "./utils/update-mantine-versions.ts";

async function updateTemplates() {
  if (!process.argv[2]) {
    throw new Error("Provide version as first argument");
  }

  for (const template of getTemplatesList()) {
    await updateTemplate({
      template,
      updateVersions: updateMantineVersions,
      version: process.argv[2],
      commitMessage: "Update `@mantine/*` dependencies to {{version}}",
    });
  }
}

updateTemplates();
