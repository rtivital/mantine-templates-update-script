import { updateTemplate } from "./utils/update-template.ts";
import { getTemplatesList } from "./utils/get-templates-list.ts";
import { updateYarn } from "./utils/update-yarn.ts";

async function updateTemplates() {
  if (!process.argv[2]) {
    throw new Error("Provide version as first argument");
  }

  for (const template of getTemplatesList()) {
    await updateTemplate({
      template,
      updateVersions: updateYarn,
      version: process.argv[2],
      commitMessage: "Update `yarn` to {{version}}",
    });
  }
}

updateTemplates();
