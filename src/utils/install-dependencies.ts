import { execa } from "execa";
import { Template } from "./get-templates-list.ts";

export async function installDependencies(template: Template) {
  await execa("yarn", ["install"], { cwd: template.rootPath });
}
