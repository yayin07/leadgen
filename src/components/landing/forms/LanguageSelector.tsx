import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info, Plus, X } from "lucide-react";
import {
  LanguageWithProficiency,
  ProficiencyLevel,
  ProficiencyLevelOption,
} from "./types";

// Proficiency level options with descriptions
const proficiencyLevelOptions: ProficiencyLevelOption[] = [
  {
    value: "native",
    label: "Native",
    description: "Mother tongue level fluency",
  },
  {
    value: "fluent",
    label: "Fluent",
    description: "High-level fluency in speaking and writing",
  },
  {
    value: "conversational",
    label: "Conversational",
    description: "Can hold conversations on various topics",
  },
];

interface LanguageSelectorProps {
  availableLanguages: string[];
  languagesWithProficiency: LanguageWithProficiency[];
  selectedLanguage: string;
  selectedProficiency: ProficiencyLevel;
  setSelectedLanguage: (language: string) => void;
  setSelectedProficiency: (proficiency: ProficiencyLevel) => void;
  handleAddLanguage: () => void;
  handleRemoveLanguage: (language: string) => void;
}

const MAX_LANGUAGE_FIELDS = 3;

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  availableLanguages,
  languagesWithProficiency,
  selectedLanguage,
  selectedProficiency,
  setSelectedLanguage,
  setSelectedProficiency,
  handleAddLanguage,
  handleRemoveLanguage,
}) => {
  // Filter out languages that are already selected
  const getAvailableLanguageOptions = () => {
    return availableLanguages.filter(
      (language) =>
        !languagesWithProficiency.some((item) => item.language === language)
    );
  };

  return (
    <div className="space-y-4 w-full overflow-x-hidden">
      <div className="flex items-center gap-2">
        <h3 className="text-xl font-semibold">Language Skills</h3>
        <Tooltip>
          <TooltipTrigger asChild>
            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
          </TooltipTrigger>
          <TooltipContent side="right" className="max-w-[350px]">
            <p>
              Select the languages you speak and your proficiency level. These
              will be used to match you with appropriate tasks.
            </p>
          </TooltipContent>
        </Tooltip>
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        Please select your languages and proficiency level (up to{" "}
        {MAX_LANGUAGE_FIELDS})
      </p>

      <Card className="card w-full overflow-x-hidden">
        <CardContent className="card-content pt-4 w-full overflow-x-hidden">
          {/* Display selected languages */}
          {languagesWithProficiency.length > 0 && (
            <div className="space-y-3 mb-4">
              <h4 className="font-medium text-sm text-gray-700">
                Selected Languages:
              </h4>
              {languagesWithProficiency.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                >
                  <div className="flex-1">
                    <span className="font-medium">{item.language}</span>
                    <span className="text-sm text-muted-foreground ml-2">
                      (
                      {
                        proficiencyLevelOptions.find(
                          (p) => p.value === item.proficiency
                        )?.label
                      }
                      )
                    </span>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveLanguage(item.language)}
                    className="h-8 w-8 p-0 hover:bg-red-100"
                  >
                    <X className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              ))}
            </div>
          )}

          {/* Add new language section */}
          {languagesWithProficiency.length < MAX_LANGUAGE_FIELDS && (
            <div className="space-y-4 border-t pt-4">
              <h4 className="font-medium text-sm text-gray-700">
                Add a Language:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="new-language">Language</Label>
                  <Select
                    value={selectedLanguage}
                    onValueChange={setSelectedLanguage}
                  >
                    <SelectTrigger id="new-language">
                      <SelectValue placeholder="Choose a language" />
                    </SelectTrigger>
                    <SelectContent>
                      {getAvailableLanguageOptions().map((language) => (
                        <SelectItem key={language} value={language}>
                          {language}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="new-proficiency">Proficiency Level</Label>
                  <Select
                    value={selectedProficiency}
                    onValueChange={(value) =>
                      setSelectedProficiency(value as ProficiencyLevel)
                    }
                    disabled={!selectedLanguage}
                  >
                    <SelectTrigger id="new-proficiency">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {proficiencyLevelOptions.map((level) => (
                        <SelectItem key={level.value} value={level.value}>
                          <div>
                            <span className="font-medium">{level.label}</span>
                            <span className="text-xs text-muted-foreground block">
                              {level.description}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                type="button"
                onClick={handleAddLanguage}
                disabled={!selectedLanguage}
                className="w-full"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Language
              </Button>
            </div>
          )}

          <div className="text-sm text-muted-foreground mt-4">
            <p>
              {languagesWithProficiency.length === 0
                ? "Please add at least one language to continue."
                : `You have selected ${
                    languagesWithProficiency.length
                  } language${languagesWithProficiency.length > 1 ? "s" : ""}.`}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LanguageSelector;
