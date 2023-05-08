import "./Profile.css"
import { StaticCloud } from "../Profile/Tagcloud/StaticCloud"


function Profile() {
	return (
		<div className="profile">
			<div className="profile-content">

				<div className="profile-cloud">
					<StaticCloud />
				</div>

				<div className="profile-text">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos eius, debitis voluptates ipsa placeat amet recusandae quibusdam. Nobis ut, est ratione rem animi consequuntur ad reprehenderit libero natus. Praesentium, molestias!
				</div>

			</div>
		</div >
	)
}

export default Profile