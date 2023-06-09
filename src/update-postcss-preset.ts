import { updateTemplate } from "./update-template.ts";
import { version } from "./version.ts";
import { getTemplates } from "./get-templates.ts";
import { updatePostcssPresetVersion } from "./update-postcss-preset-version.ts";

async function updateTemplates() {
  const templates = await getTemplates();
  for (const template of templates) {
    await updateTemplate(template, version, updatePostcssPresetVersion);
  }
}

updateTemplates();
