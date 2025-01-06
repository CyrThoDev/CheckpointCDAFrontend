import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_COUNTRY_BY_CODE } from "@/graphql/getCountryDetails";
import CountryDetails from "../components/CountryDetails";
import type { Country } from "@/types";

export default function CountryPage() {
	const router = useRouter();
	const { code } = router.query;
	const { loading, error, data } = useQuery(GET_COUNTRY_BY_CODE, {
		variables: { code },
	});
	const country: Country = data?.country;

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	console.log(country);
	return (
		<div className="pt-10">
			{loading && <p>Loading ...</p>}
			{error && <p>Can not find country</p>}
			{country && <CountryDetails country={country} />}
		</div>
	);
}
