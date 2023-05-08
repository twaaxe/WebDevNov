import "./ProjectItem.css"

function ProjectItem(projectItem, index) {
	const { title, tags } = projectItem;
	const bgColorIDs = ["yellow", "green", "red", "blue"]

	return (
		<div className="projectItem" id={bgColorIDs[index]}>
			<h2>{title}</h2>
			<p>{tags}</p>
		</div>
	)
}

export default ProjectItem