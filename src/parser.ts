import { TxtParentNode } from "@textlint/ast-node-types";
import { latexParser } from "latex-utensils";

export function parse(texString: string): TxtParentNode {
  latexParser.parse(texString);
}
