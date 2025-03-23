import React from "react";

const leaderboardData = [
  { name: "Ryan", score: 60, movement: "" },
  { name: "Nihal", score: 47, movement: "+++" },
  { name: "Max", score: 45, movement: "+" },
  { name: "Ruble", score: 44, movement: "--", tied: true },
  { name: "Alec", score: 44, movement: "+", tied: true },
  { name: "Pat", score: 43, movement: "+++" },
  { name: "Matt", score: 42, movement: "----", tied: true },
  { name: "Ben B", score: 42, movement: "--", tied: true },
  { name: "Blue", score: 40, movement: "-" },
  { name: "Ben P", score: 22, movement: "" }
];

const movementColors = {
  "+++": "text-green-500 font-bold",
  "+": "text-green-400",
  "-": "text-red-400",
  "--": "text-red-500 font-bold",
  "----": "text-red-700 font-bold"
};

const Leaderboard = () => {
  return (
    <div className="max-w-lg mx-auto mt-10 p-5 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-4">Overall Standings 03/15/2025</h2>
      <div className="border rounded-lg overflow-hidden">
        {leaderboardData.map((player, index) => (
          <div
            key={player.name}
            className={`flex justify-between items-center px-4 py-2 border-b last:border-b-0 ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            }`}
          >
            <span className="font-semibold">
              {player.tied ? `T${index + 1}` : index + 1}. {player.name}
            </span>
            <span className="flex gap-2">
              <span className="font-medium">{player.score}</span>
              {player.movement && (
                <span className={movementColors[player.movement] || "text-gray-500"}>
                  {player.movement}
                </span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
