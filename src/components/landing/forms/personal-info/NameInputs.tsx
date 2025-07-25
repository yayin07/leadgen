import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface NameInputsProps {
  firstName: string;
  lastName: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NameInputs: React.FC<NameInputsProps> = ({
  firstName,
  lastName,
  handleChange,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label htmlFor="firstName" className="text-sm font-medium">
          First Name
        </Label>
        <Input
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          placeholder="Your first name"
          required
          className="h-12 border-gray-200 hover:border-gray-300 focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="lastName" className="text-sm font-medium">
          Last Name
        </Label>
        <Input
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          placeholder="Your last name"
          required
          className="h-12 border-gray-200 hover:border-gray-300 focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </div>
    </div>
  );
};

export default NameInputs;
