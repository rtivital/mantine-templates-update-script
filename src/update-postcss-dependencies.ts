import { updateTemplate } from "./utils/update-template.ts";
import { getTemplatesList } from "./utils/get-templates-list.ts";
import { updatePostcssPresetVersion } from "./utils/update-postcss-preset-version.ts";

async function updateTemplates() {
  for (const template of getTemplatesList()) {
    await updateTemplate({
      template,
      updateVersions: updatePostcssPresetVersion,
      version: process.argv[2],
      commitMessage: "Update postcss-preset-mantine dependency to {{version}}",
    });
  }
}

updateTemplates();
