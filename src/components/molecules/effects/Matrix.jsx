import React from 'react';
import { shuffle } from 'helpers/utils/miscellaneous';
  
/**
 * Considering an array in input, will randomly generate p for
 * every items of those with random size and opacity.
 */
const Matrix = (
	{
		list = [],
		limit = 100,
	  className
 }) => {
	
	const classNames = className? className : 'matrix';
	let count = limit;
	let arr = [];

	while(count>list.length){
		const shuffledArray = shuffle(list);
    shuffledArray.forEach((item) => {
			count-=1;
			arr.push(<p key={count}>{item}</p>);
		});
	} 
	
	return (
		<div className={classNames}> 
			{arr}
		</div>
  )
}

export default Matrix;
