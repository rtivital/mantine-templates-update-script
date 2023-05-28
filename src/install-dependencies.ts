import { execa } from "execa";

export async function installDependencies(templatePath: string) {
  await execa("yarn", ["install"], { cwd: templatePath });
}
