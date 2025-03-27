interface SearchBarProps {
    setQuery: (query: string) => void;
    setLocation: (location: string) => void;
    setSalary: (salary: string) => void;
  }
  
  export default function SearchBar({ setQuery, setLocation, setSalary }: SearchBarProps) {
    return (
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search job title..."
          className="p-2 border rounded w-full md:w-1/3"
          onChange={(e) => setQuery(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location..."
          className="p-2 border rounded w-full md:w-1/3"
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          inputMode="numeric"
          placeholder="Min Salary ($)"
          className="p-2 border rounded w-full md:w-1/3"
          onChange={(e) => setSalary(e.target.value)}
        />
      </div>
    );
  }
  