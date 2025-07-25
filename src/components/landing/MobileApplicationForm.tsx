import React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { TooltipProvider } from "@/components/ui/tooltip";
import MobileFormHeader from "./mobile-form/MobileFormHeader";
import MobileFormContainer from "./mobile-form/MobileFormContainer";

interface MobileApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileApplicationForm = ({
  isOpen,
  onClose,
}: MobileApplicationFormProps) => {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <TooltipProvider>
      <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <SheetContent
          className="w-full sm:max-w-full p-0 overflow-y-auto h-[95vh] overflow-x-hidden bg-white"
          side="bottom"
        >
          <MobileFormHeader onClose={onClose} />
          <div className="pb-24">
            <MobileFormContainer />
          </div>
        </SheetContent>
      </Sheet>
    </TooltipProvider>
  );
};

export default MobileApplicationForm;
