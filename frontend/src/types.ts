export interface Continent {
	id: string;
	name: string;
}

export interface Country {
	code: string;
	name: string;
	emoji: string;
	id: number;
	continent: Continent;
}
export interface NewCountryInput {
	name: string;
	code: string;
	emoji: string;
}
