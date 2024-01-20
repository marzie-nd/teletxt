import { useState } from "react";

const Search = () => {

  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const onSearch = (event) => {
    event.preventDefault();
    setLoading(true);
    setQuery(event.target.value);
    getQuery(event.target.value);
  }

  const getQuery = () => {
    try {
      
    } catch (error) {
      setQuery('');
    }
  }

  return (
    <div className='search'>
      <div className="searchForm">
        <input 
        type="text" 
        placeholder='Search...'
        value={query}
        onChange={onSearch}
        />
      </div>
    </div>
  )
}

export default Search;
