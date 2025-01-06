import type { Country } from "@/types.js";
export default function CountryDetails({ country }: Country) {
	console.log(country);
	return (
		<div className="flex flex-col items-center gap-4">
			<p className="text-6xl">{country.emoji}</p>
			<p>
				Name : {country.name} ({country.code})
			</p>
			{country.continent && <p>Continent : {country.continent.name}</p>}
		</div>
	);
}
