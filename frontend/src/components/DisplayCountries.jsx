import { useQuery } from "@apollo/client";
import { GET_ALL_COUNTRIES_QUERY } from "../graphql/client";
import Link from "next/link";

export default function DisplayCountries() {
	const { loading, error, data } = useQuery(GET_ALL_COUNTRIES_QUERY);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	if (!data || !data.countries) return <p>No countries found</p>;

	return (
		<ul className="flex flex-wrap gap-4 justify-center items-center mt-4">
			{data.countries.map((country) => (
				<Link href={`/${country.name}`} key={country.id}>
					<li className=" w-24 h-24 flex flex-col items-center justify-center border p-4 rounded-md shadow-md">
						<p className="text-2xl">{country.emoji}</p>
						<p className="font-bold">{country.name}</p>
					</li>
				</Link>
			))}
		</ul>
	);
}
