import { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionParagraph from "./SectionParagraph";

export default function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="border rounded-xl border-gray overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex cursor-pointer items-center justify-between w-full px-4 py-3"
      >
        <span className="font-semibold text-base text-left">{title}</span>
        {open ? <ChevronUp size={25} /> : <ChevronDown size={25} />}
      </button>

      <div
        ref={contentRef}
        className={`transition-all duration-300 ease-in-out overflow-hidden px-4 ${
          open ? "max-h-96 pb-3" : "max-h-0"
        }`}
      >
        <SectionParagraph spacing='mt-0' size='text-sm' align='text-left' text={children} />
      </div>
    </div>
  );
}
