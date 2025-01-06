import { useRouter } from "next/router";
import CountryCard from "../components/CountryCard";

export default function CountryPage() {
	const router = useRouter();
	const { name } = router.query;

	return (
		<div className="p-4">
			<p>Hello from {name}</p>
			<CountryCard />
		</div>
	);
}
