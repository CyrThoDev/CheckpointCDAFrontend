import { useQuery } from "@apollo/client";
import { GET_ALL_COUNTRIES_QUERY } from "@/graphql/getAllCountries";
import Link from "next/link";
import type { Country } from "@/types";

export default function DisplayCountries() {
	const { loading, error, data } = useQuery(GET_ALL_COUNTRIES_QUERY);
	const countries: Country[] = data?.countries || [];

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<ul className="flex flex-wrap gap-4 justify-center items-center mt-4">
			{error && <p>Can not get countries</p>}
			{countries.map((country) => (
				<Link href={`/${country.code}`} key={country.id}>
					<li className=" w-24 h-24 flex flex-col items-center justify-center border p-4 rounded-md shadow-md">
						<p className="text-2xl">{country.emoji}</p>
						<p className="font-bold">{country.name}</p>
					</li>
				</Link>
			))}
		</ul>
	);
}
