import CardDisplay from "@/components/CardDisplay";
import CardForm, { CardData } from "@/form/CardGeneratorForm";
import { useState } from "react";

function CardGenerator() {
  const [generateCards, setGenerateCards] = useState<CardData[]>([]);

  const handleSubmit = (data: CardData) => {
    setGenerateCards((prev) => [...prev, data]);
  };

  const handleReset = () => {
    setGenerateCards([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mt-10 mb-4">
        Name Card Generator
      </h1>
      <div className="w-full max-w-screen-xl bg-gray-100 flex flex-row py-4 gap-4">
        {/* Form Section */}
        <div className="bg-white flex flex-col shadow-md rounded-lg p-6 mb-6 w-[600px]">
          <h2 className="text-lg font-semibold mb-4"> Generate Name Card</h2>
          <CardForm onSubmit={handleSubmit} onReset={handleReset} />
        </div>

        <div className="w-full bg-white shadow-md rounded-lg p-6 mb-6">
          <div className="grid grid-cols-3 gap-2">
            {generateCards.map((card) => (
              <div key={card.id} className="rounded-lg px-1 py-2">
                <CardDisplay cardData={card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardGenerator;
