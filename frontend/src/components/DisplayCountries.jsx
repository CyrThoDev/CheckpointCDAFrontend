import { useQuery } from "@apollo/client";
import { GET_ALL_COUNTRIES_QUERY } from "../graphql/client";

export default function DisplayCountries() {
	const { loading, error, data } = useQuery(GET_ALL_COUNTRIES_QUERY);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	if (!data || !data.countries) return <p>No countries found</p>;

	return (
		<div>
			<h1>List of Countries</h1>
			<ul>
				{data.countries.map((country) => (
					<li key={country.id}>
						{country.emoji} {country.name} {country.code}
					</li>
				))}
			</ul>
		</div>
	);
}
