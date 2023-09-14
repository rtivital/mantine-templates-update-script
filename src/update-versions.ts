import fs from "fs-extra";
import path from "path";

function getMantineDependencies(dependencies: any) {
  return Object.keys(dependencies).filter((dependency) =>
    dependency.startsWith("@mantine/")
  );
}

export async function updateVersions(templatePath: string, version: string) {
  const packageJsonPath = path.join(templatePath, "package.json");
  const content = await fs.readJson(packageJsonPath, "utf-8");

  getMantineDependencies(content.dependencies).forEach((dependency) => {
    content.dependencies[dependency] = version;
  });

  getMantineDependencies(content.devDependencies).forEach((dependency) => {
    content.devDependencies[dependency] = version;
  });

  await fs.writeJson(packageJsonPath, content, { spaces: 2 });
}
