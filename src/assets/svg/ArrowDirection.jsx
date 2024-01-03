import React from 'react'
import classNames from "classnames";

export default ({ className }) =>
	<svg className={classNames('calligraphy', className)}
		version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
		viewBox="0 0 18 40">
		<g id="prev">
			<polygon className="arrow" points="8,16.6 1,7.9 2,7.1 8,14.5 13.9,7.2 14.9,8 	" />
			<polygon className="arrow-fixed" points="8,16.6 1,7.9 2,7.1 8,14.5 13.9,7.2 14.9,8 	" />
			<path className="arrow-base" d="M15.8,0.3L0.2,0.2L8,9.9L15.8,0.3L15.8,0.3z M13.1,1.6L8,7.8L2.9,1.5L13.1,1.6L13.1,1.6z" />
		</g>
	</svg>
