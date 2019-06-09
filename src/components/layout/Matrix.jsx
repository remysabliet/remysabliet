import React from 'react';
const list = ['Cloud computing', 'VM', 'Docker', 'AI', 'Paradigm', 'Java', 'JavaScript','ReactJS','CSS XHTML','JSS','CCSOM','DOM','SASS',
'Front-end','Back-End','Database','Hibernate','UML','Animation', 'Hibernate', 'Objection.js','OOM']


function shuffle(array) {
	const cloneTab = array.slice();
	for (let i = cloneTab.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[cloneTab[i], cloneTab[j]] = [cloneTab[j], cloneTab[i]];
	}

	return cloneTab;
}
  
/**
 * Considering a list of String in input, Will randomly generate p tag with
 * specific id's in order to have Randm CSS style applied through SASS pre-build
 * the number of items in Javascript is provided to sass via a custom variable added at the 
 *  document.documentElement.style.setProperty('--matrix-item-nb', `${vh}px`);
 */
const Matrix = ({limit = 100}) => {

	window.addEventListener(
		'resize',() => {
			// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
			let vh = window.innerHeight * 0.01;
			let vw = window.innerWidth * 0.01;
			// Then we set the value in the --vh custom property to the root of the document (In order to be accessible from our CSS calculation function)
			// Slide property: height: calc(var(--vh, 1vh) * 100);
			document.documentElement.style.setProperty('--vh', `${vh}px`);
			document.documentElement.style.setProperty('--vw', `${vw}px`);
		})
	
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
		<div className='matrix'> 
			{arr}
		</div>
  )
}

export default Matrix;
