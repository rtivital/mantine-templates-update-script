import { argv } from "yargs";

export const version = (argv as any)._[0];
