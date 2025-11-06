import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

export default function SearchBar({ onSearch, initialQuery = '', onFocus, onBlur }) {
  const [query, setQuery] = useState(initialQuery);

  // Update query when initialQuery changes
  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <Search
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted"
          size={20}
        />
        <input
          type="text"
          placeholder="Search posts by title, content, or category..."
          value={query}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className="w-full pl-12 pr-12 py-4 bg-card border-2 border-border rounded-xl focus:outline-none focus:border-primary transition-all text-text placeholder:text-muted shadow-sm hover:shadow-md"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full bg-background text-muted hover:text-text hover:bg-primary/10 transition-all"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </form>
  );
}

