import type { MDXComponents } from "mdx/types";
import Callout from "@/components/ui/Callout";

const components: MDXComponents = {
  Callout,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
