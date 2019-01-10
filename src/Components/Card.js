import React from 'react'

const Cards = (props) => {
	return(	
		<div className='tc bg-light-green ma2 grow dib pa1 br4 bw shadow-3'>
		  <h1>{props.name}</h1>
		  <img src= {`https://robohash.org/${props.name}?200*200`} alt = 'images'/>
		  <div>
		  	<h2>{props.username}</h2>
		    <h2>{props.email}</h2>
		  </div>
		</div>
	);
}

export default Cards;