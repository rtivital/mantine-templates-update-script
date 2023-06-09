import { updateTemplate } from "./update-template.ts";
import { version } from "./version.ts";
import { getTemplates } from "./get-templates.ts";
import { updateVersions } from "./update-versions.ts";

async function updateTemplates() {
  const templates = await getTemplates();
  for (const template of templates) {
    await updateTemplate(template, version, updateVersions);
  }
}

updateTemplates();
