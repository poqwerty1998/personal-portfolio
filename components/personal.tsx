"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";

export default function Personal() {
  const { ref } = useSectionInView("Personal");
  return (
    <section ref={ref} className="scroll-mt-28 mb-28" id="personal">
      <SectionHeading>My Personal Life</SectionHeading>
    </section>
  );
}
