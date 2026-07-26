import Select from "react-select";

function PlayerSearch({
  label,
  players,
  selectedPlayer,
  setSelectedPlayer,
}) {
  const options = players.map((player) => ({
    value: player,
    label: player,
  }));

  const selectedOption =
    options.find((option) => option.value === selectedPlayer) || null;

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: "52px",
      borderRadius: "14px",
      borderColor: state.isFocused ? "#2563eb" : "#cbd5e1",
      boxShadow: state.isFocused
        ? "0 0 0 3px rgba(37,99,235,0.15)"
        : "none",
      "&:hover": {
        borderColor: "#2563eb",
      },
      fontSize: "15px",
      cursor: "pointer",
    }),

    placeholder: (provided) => ({
      ...provided,
      color: "#94a3b8",
      fontWeight: 500,
    }),

    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused
        ? "#2563eb"
        : "#ffffff",
      color: state.isFocused ? "#ffffff" : "#1e293b",
      cursor: "pointer",
      padding: "12px",
    }),

    menu: (provided) => ({
      ...provided,
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow:
        "0 10px 30px rgba(0,0,0,0.15)",
    }),

    singleValue: (provided) => ({
      ...provided,
      color: "#0f172a",
      fontWeight: 600,
    }),
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        {label}
      </label>

      <Select
        options={options}
        value={selectedOption}
        onChange={(option) =>
          setSelectedPlayer(option ? option.value : "")
        }
        isSearchable
        isClearable
        placeholder={`Search ${label}...`}
        styles={customStyles}
      />
    </div>
  );
}

export default PlayerSearch;