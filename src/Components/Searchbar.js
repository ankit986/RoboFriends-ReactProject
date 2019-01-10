import React from 'react';

const Search =({searchfield, searchChange}) => {
	return(
	  <div className='pa2'>	
	    <input 
		  className = 'pa2 ba b--green bg-lightest-blue'    
	      type='search' 
	      placeholder='Search Robo-Backbenchers'
	      onChange={searchChange}
	    />

	  </div>
	);
}

export default Search;