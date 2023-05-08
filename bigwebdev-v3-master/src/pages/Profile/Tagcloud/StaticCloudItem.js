import React from "react";

export const StaticCloudItem = ({ data }) => {
	return (
		<div>
			<a>
				<img height="30" width="30" src={data} className="logo" />
			</a>
		</div>
	);
};