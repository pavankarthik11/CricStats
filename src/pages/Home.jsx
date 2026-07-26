import { useState } from "react";
import { datasets } from "../data/datasets";
import StatCard from "../components/StatCard";
import PlayerSearch from "../components/PlayerSearch";

function Home() {
  const [selectedTournament, setSelectedTournament] = useState("IPL");
  const [selectedBatsman, setSelectedBatsman] = useState("");
  const [selectedBowler, setSelectedBowler] = useState("");
  const [comparison, setComparison] = useState(null);

  const stats = datasets[selectedTournament];

  const batsmen = [...new Set(stats.map(item => item.batsman))].sort();

  const bowlers = [...new Set(stats.map(item => item.bowler))].sort();

  const handleCompare = () => {
    if (!selectedBatsman || !selectedBowler) {
      alert("Please select both a batsman and a bowler.");
      return;
    }

    const result = stats.find(
      (item) =>
        item.batsman === selectedBatsman && item.bowler === selectedBowler,
    );

    if (!result) {
      setComparison(null);
      alert("No head-to-head data found.");
      return;
    }

    setComparison(result);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-5 shadow-lg">
        <h1 className="text-3xl font-bold text-center">
          Cricket Matchup Analyzer
        </h1>
      </nav>

      {/* Hero */}
      <div className="flex flex-col items-center mt-16 px-4">
        <h2 className="text-4xl font-bold mb-3 text-center">
          Compare Any Batsman vs Bowler
        </h2>

        <p className="text-gray-600 mb-10 text-center">
          Discover head-to-head cricket statistics.
        </p>

        {/* Search Card */}
        {/* Search Card */}
        <div className="bg-white shadow-lg rounded-xl p-8 max-w-2xl w-full">
          {/* Tournament */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">Tournament</label>

            <select
              className="w-full border rounded-lg p-3"
              value={selectedTournament}
              onChange={(e) => {
                setSelectedTournament(e.target.value);

                // Reset previous selections
                setSelectedBatsman("");
                setSelectedBowler("");
                setComparison(null);
              }}
            >
              <option value="IPL">🏆 IPL</option>
              <option value="BBL">🏏 BBL</option>
            </select>
          </div>

          {/* Batsman & Bowler */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PlayerSearch
              label="Batsman"
              players={batsmen}
              selectedPlayer={selectedBatsman}
              setSelectedPlayer={setSelectedBatsman}
            />

            <PlayerSearch
              label="Bowler"
              players={bowlers}
              selectedPlayer={selectedBowler}
              setSelectedPlayer={setSelectedBowler}
            />
          </div>

          <button
            onClick={handleCompare}
            className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:scale-105 transition duration-300"
          >
            Compare Players
          </button>
        </div>

        {comparison && (
          <div className="bg-white shadow-lg rounded-xl p-8 mt-10 max-w-2xl w-full">
            <h2 className="text-2xl font-bold text-center mb-8">
              Head-to-Head Statistics
            </h2>

            <div className="flex items-center justify-between mb-8">
              <div className="text-center">
                <div className="text-5xl mb-2">🏏</div>
                <h3 className="text-xl font-bold">{comparison.batsman}</h3>
                <p className="text-gray-500">Batsman</p>
              </div>

              <div className="text-3xl font-bold text-blue-700">VS</div>

              <div className="text-center">
                <div className="text-5xl mb-2">🎯</div>
                <h3 className="text-xl font-bold">{comparison.bowler}</h3>
                <p className="text-gray-500">Bowler</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <StatCard title="Runs" value={comparison.runs} />
              <StatCard title="Balls" value={comparison.balls} />
              <StatCard title="Strike Rate" value={comparison.strikeRate} />
              <StatCard title="Dismissals" value={comparison.dismissals} />
              <StatCard title="4s" value={comparison.fours} />
              <StatCard title="6s" value={comparison.sixes} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
