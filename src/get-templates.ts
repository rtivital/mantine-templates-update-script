import path from "path";
import fs from "fs-extra";

export async function getTemplates() {
  const templatesPath = path.join(__dirname, "../..");
  const folders = await fs.readdir(templatesPath);
  const filteredFolders = folders.filter(
    (folder) =>
      folder !== "mantine-templates-update-script" &&
      fs.lstatSync(path.join(templatesPath, folder)).isDirectory()
  );

  const foldersPaths = filteredFolders.map((folder) =>
    path.join(templatesPath, folder)
  );

  return foldersPaths;
}
