import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COUNTRY } from "@/graphql/addCountry";
import type { NewCountryInput } from "@/types";

const newCountry = {
	name: "",
	code: "",
	emoji: "",
};
export default function AddCountryForm() {
	const [formData, setFormData] = useState<NewCountryInput>(newCountry);
	const [addCountry, { loading, error }] =
		useMutation<NewCountryInput>(ADD_COUNTRY);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		console.log(typeof formData);
		try {
			const { data } = await addCountry({
				variables: {
					data: formData,
				},
			});
			console.log("Country added:", data);
			setFormData(newCountry);
		} catch (err) {
			console.error("Error adding country:", err);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="mx-24 p-4 flex flex-col lg:flex-row items-center lg:items-end justify-center gap-6 border  rounded-md shadow-md"
		>
			<label className="flex flex-col gap-1">
				<span className="font-medium text-gray-700">Name</span>
				<input
					type="text"
					name="name"
					placeholder="Country Name"
					value={formData.name}
					onChange={handleChange}
					className="border p-2 rounded"
					required
				/>
			</label>
			<label className="flex flex-col gap-1">
				<span className="font-medium text-gray-700">Code</span>
				<input
					type="text"
					name="code"
					placeholder="Country Code"
					value={formData.code}
					onChange={handleChange}
					className="border p-2 rounded"
					required
				/>
			</label>
			<label className="flex flex-col gap-1">
				<span className="font-medium text-gray-700">Emoji</span>
				<input
					type="text"
					name="emoji"
					placeholder="Country Emoji"
					value={formData.emoji}
					onChange={handleChange}
					className="border p-2 rounded"
					required
				/>
			</label>
			<button
				type="submit"
				className="bg-pink-600 text-white p-2 rounded hover:bg-black "
			>
				Add Country
			</button>
			{error && <p className="text-red-500">Error: {error.message}</p>}
		</form>
	);
}
