import styles from '../styles/Home.module.css'
// import vent-images from '../public/vent-images'
import Image from 'next/image'

export default function Home() {
	return (
		<div className={styles.vents}>
		
			<a href="http://www.google.com" target="_blank">
				<Image
					src="/../public/vent-images/continuous_vent.jpeg"
					alt="Continuous vent picture"
					width={250}
					height={250}
				/>
			</a>

			<a href="http://www.google.com" target="_blank">
				<Image
					src="/../public/vent-images/dormer_vent.png"
					alt="Dormer vent picture"
					width={250}
					height={250}
				/>
			</a>

			<a href="http://www.google.com" target="_blank">
				<Image
					src="/../public/vent-images/eave_vent.jpeg"
					alt="Eave vent picture"
					width={250}
					height={250}
				/>
			</a>

			<a href="http://www.google.com" target="_blank">
				<Image
					src="/../public/vent-images/foundation_vent.png"
					alt="Foundation vent picture"
					width={250}
					height={250}
				/>
			</a>

			<a href="http://www.google.com" target="_blank">
				<Image
					src="/../public/vent-images/gable_vent.jpg"
					alt="Gable vent picture"
					width={250}
					height={250}
				/>
			</a>

			<a href="http://www.google.com" target="_blank">
				<Image
					src="/../public/vent-images/soffit_vent.jpeg"
					alt="Soffit vent picture"
					width={250}
					height={250}
				/>
			</a>



		</div>
	)
}
