
import Hero from "./components/landingPage/Hero";
import Partners from "./components/landingPage/Partners";
import DeployFlash from "./components/landingPage/Deploy";
import GainUsers from "./components/landingPage/GainUser";
import DeveloperExperience from "./components/landingPage/Experience";

export default async function Home() {
	return(
		<main className="relative pt-20 min-h-screen w-full overflow-hidden">
 			{/* Animated Background Elements */}
 			<div className="pointer-events-none absolute inset-0 overflow-hidden">
 				<div className="animate-pulse-slow absolute -left-[5vw] -top-[5vw] h-[30vw] w-[30vw] rounded-full bg-newGreen/20 blur-3xl" />
 				<div className="animate-pulse-slower absolute -right-[5vw] top-[20vh] h-[30vw] w-[30vw] rounded-full bg-newGreen/10 blur-3xl" />
 			</div>
			<section>
			<Hero/>
			<Partners/>
			<DeployFlash/>
			<GainUsers/>
			<DeveloperExperience/>
			</section>

		</main>
	);
}

