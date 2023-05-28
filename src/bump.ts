import { getBumpedVersion } from "./get-bumped-version.ts";
import { updateTemplate } from "./update-template.ts";
import { getTemplates } from "./get-templates.ts";

async function bump() {
  const version = await getBumpedVersion();

  const templates = await getTemplates();
  for (const template of templates) {
    await updateTemplate(template, version);
  }
}

bump();
