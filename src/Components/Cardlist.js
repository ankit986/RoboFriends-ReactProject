import React from 'react';
import Cards from './Card';

const Lisst = ({ robotsprop }) => { 
	return(
		<div style={{overflowY: 'scroll', height: '550px', border:'2.5px solid black'}}>	
			{		
				robotsprop.map((user,i) => {
				    return(
				      <Cards
				    	key = {i}
			    	    id={robotsprop[i].id}
			     		name={robotsprop[i].name}
			     		username={robotsprop[i].username} 
			     		email={robotsprop[i].email}
			     	  />
			     	);	
				})
			}			    
		</div>
	);
}

export default Lisst;