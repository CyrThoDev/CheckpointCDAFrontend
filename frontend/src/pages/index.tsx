import Header from "@/components/Header";
import DisplayCountries from "@/components/DisplayCountries";
import AddCountryForm from "@/components/AddCountryForm";

export default function Home() {
	return (
		<div className=" flex flex-col gap-10 pt-10">
			<AddCountryForm />
			<DisplayCountries />
		</div>
	);
}
