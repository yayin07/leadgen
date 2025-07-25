import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface LanguageGenderInputsProps {
  nativeLanguage: string;
  gender: string;
  availableLanguages: string[];
  handleSelectChange: (name: string, value: string) => void;
}

const LanguageGenderInputs: React.FC<LanguageGenderInputsProps> = ({
  nativeLanguage,
  gender,
  availableLanguages,
  handleSelectChange,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label htmlFor="nativeLanguage" className="text-sm font-medium">
          Native Language
        </Label>
        <Select
          value={nativeLanguage}
          onValueChange={(value) => handleSelectChange("nativeLanguage", value)}
        >
          <SelectTrigger
            id="nativeLanguage"
            className="h-12 border-gray-200 hover:border-gray-300 focus:ring-2 focus:ring-primary/20 transition-all"
          >
            <SelectValue placeholder="Select your native language" />
          </SelectTrigger>
          <SelectContent className="max-h-[240px]">
            {availableLanguages.map((language) => (
              <SelectItem
                key={`native-${language.toLowerCase()}`}
                value={language.toLowerCase()}
                className="py-2.5"
              >
                {language}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 mb-1">
          <Label htmlFor="gender" className="text-sm font-medium">
            Gender
          </Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent className="max-w-[300px] text-sm bg-white shadow-lg p-3 border-0">
                <p>Some of our tasks are gender specific.</p>
                <p className="mt-1">e.g Audio Collection</p>
                <p className="mt-1">
                  Tasks requiring participants (50% male / 50% female) to record
                  audio clips to help voice assistance:
                </p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Open Spotify</li>
                  <li>Turn Left</li>
                  <li>Call Jenny</li>
                </ul>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Select
          value={gender}
          onValueChange={(value) => handleSelectChange("gender", value)}
        >
          <SelectTrigger
            id="gender"
            className="h-12 border-gray-200 hover:border-gray-300 focus:ring-2 focus:ring-primary/20 transition-all"
          >
            <SelectValue placeholder="Select your gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male" className="py-2.5">
              Male
            </SelectItem>
            <SelectItem value="female" className="py-2.5">
              Female
            </SelectItem>
            <SelectItem value="other" className="py-2.5">
              Other
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default LanguageGenderInputs;
