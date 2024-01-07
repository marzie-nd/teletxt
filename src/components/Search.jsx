import Img from '../img/search.png';

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Search...' />
        <img src={Img} alt="search" width="20px" />
      </div>
    </div>
  )
}

export default Search;
