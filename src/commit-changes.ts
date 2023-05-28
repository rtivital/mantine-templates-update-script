import { execa } from "execa";

export async function commitChanges(templatePath: string, version: string) {
  await execa("git", ["add", "."], { cwd: templatePath });
  await execa(
    "git",
    ["commit", "-m", `Update @mantine/* dependencies to version ${version}`],
    { cwd: templatePath }
  );
}