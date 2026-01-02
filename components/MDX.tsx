import Image from "next/image";
import { Note } from "./Note";
import { Challenge } from "./Challenge";
import { Math } from "./Math";
import { CenteredTable } from "./CenteredTable";

export const components = {
  Image,
  Note,
  Challenge,
  Math,
  Table: CenteredTable,
};
