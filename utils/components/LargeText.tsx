import { HOME_QUERYResult } from "@/sanity/types";

type landingModuleProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "largeText" }
>;

export function LargeText({ text }: landingModuleProps) {
  return (
    <section>
      <h2>{text}</h2>
    </section>
  );
}
