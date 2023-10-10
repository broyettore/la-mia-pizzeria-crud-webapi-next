import React from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className='text-center my-6'>
      <input type="text" placeholder="Search Pizzas" onChange={handleSearch} className="input input-bordered input-primary w-full max-w-xs" />
    </div>
  );
};

export default SearchBar;

