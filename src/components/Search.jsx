import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Search.scss"
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
      <input type="text" placeholder='Search...'/>
    </div>
  )
}

export default Search;
