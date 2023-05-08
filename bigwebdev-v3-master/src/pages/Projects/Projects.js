import "./Projects.css"
import ProjectItem from "../../components/ProjectItem/ProjectItem"
import { ProjectItemData } from "../../components/ProjectItem/ProjectItemData"

function Projects() {
	return (
		<div className="projects">
			{ProjectItemData.map((item, index) => ProjectItem(item, index))}
		</div>
	)
}

export default Projects