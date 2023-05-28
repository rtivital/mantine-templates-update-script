import { argv } from "yargs";
import { getTemplates } from "./get-templates";

const version = (argv as any)._[0];

getTemplates();
