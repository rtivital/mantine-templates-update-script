import { updateTemplate } from "./utils/update-template.ts";
import { getTemplatesList } from "./utils/get-templates-list.ts";
import { updateNode } from "./utils/update-node.ts";

async function updateTemplates() {
  if (!process.argv[2]) {
    throw new Error("Provide version as first argument");
  }

  for (const template of getTemplatesList()) {
    await updateTemplate({
      template,
      updateVersions: updateNode,
      version: process.argv[2],
      commitMessage: "Update `node` to {{version}}",
    });
  }
}

updateTemplates();
