import React, { memo } from 'react'

function Memo({ value }) {
	console.log("Memo component")
	return (
		<div>
			<h1>{value}</h1>

		</div>
	)
}

export default memo(Memo);