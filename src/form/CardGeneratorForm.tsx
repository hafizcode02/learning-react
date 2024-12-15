import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

interface CardGeneratorFormProps {
  onSubmit: (data: CardData) => void;
  onReset: () => void;
}

export interface CardData {
  id: string;
  name: string;
  jobTitle: string;
  description: string;
}

function CardForm({ onSubmit, onReset }: CardGeneratorFormProps) {
  const [formData, setFormData] = useState<Omit<CardData, "id">>({
    name: "",
    jobTitle: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ id: Date.now().toString(), ...formData });
    setFormData({ name: "", jobTitle: "", description: "" });
  };

  const navigate = useNavigate();

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="jobTitle">Job Title</Label>
        <Input
          id="jobTitle"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex space-x-2">
        <Button type="submit">Add Card</Button>
        <Button type="button" variant="outline" onClick={onReset}>
          Reset All
        </Button>
        <Button
          type="button"
          variant="outline"
          className="bg-blue-500 text-white hover:bg-white"
          onClick={() => navigate(-1)}
        >
          Back to Home
        </Button>
      </div>
    </form>
  );
}

export default CardForm;
