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
          className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-muted"
          size={18}
        />
        <input
          type="text"
          placeholder="Search posts..."
          value={query}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-4 bg-card border-2 border-border rounded-xl focus:outline-none focus:border-primary transition-all text-sm sm:text-base text-text placeholder:text-muted shadow-sm hover:shadow-md"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full bg-background text-muted hover:text-text hover:bg-primary/10 transition-all"
          >
            <X size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
        )}
      </div>
    </form>
  );
}

