import { CardData } from "@/form/CardGeneratorForm";
import { Card, CardContent } from "./ui/card";

interface CardDisplayProps {
  cardData: CardData;
}

function CardDisplay({ cardData }: CardDisplayProps) {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-2">{cardData.name}</h2>
        <p className="text-md text-gray-600 mb-1">{cardData.jobTitle}</p>
        <p className="text-sm text-gray-500">{cardData.description}</p>
      </CardContent>
    </Card>
  );
}

export default CardDisplay;
