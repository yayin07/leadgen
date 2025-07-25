import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SheetHeader } from "@/components/ui/sheet";

interface MobileFormHeaderProps {
  onClose: () => void;
}

const MobileFormHeader: React.FC<MobileFormHeaderProps> = ({ onClose }) => {
  return (
    <SheetHeader className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b py-4 px-4 flex flex-row items-center justify-between">
      <h2 className="text-xl font-semibold">Apply Now</h2>
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="shrink-0"
      >
        <X className="h-5 w-5" />
        <span className="sr-only">Close</span>
      </Button>
    </SheetHeader>
  );
};

export default MobileFormHeader;
