import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const onSearch = (event) => {
    event.preventDefault();
    setLoading(true);
    setQuery(event.target.value);
  }


  return (
    <div className='search'>
      <div className="searchForm">
        <input 
        type="text" 
        placeholder='Search...'
        value={searchParams.get("filter") || ""}
        onChange={onSearch}
        />
      </div>
    </div>
  )
}

export default Search;
