export type TMDBResponse = {
	page: number;
	results: TMDBMovie[];
	total_pages: number;
	total_results: number;
};

export type TMDBMovie = {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	title: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	softcore: boolean;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export type Movie = {
	id: number;
	title: string;
	originalTitle: string;
	genres: string[] | undefined;
	originalLanguage: string;
	description: string;
	poster: string;
	cover: string;
	releaseDate: string;
	average: number;
};

export type TMDBMovieDetail = {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: BelongsToCollection;
	budget: number;
	genres: Genre[];
	homepage: string;
	id: number;
	imdb_id: string;
	origin_country: string[];
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	release_date: string;
	revenue: number;
	runtime: number;
	softcore: boolean;
	spoken_languages: SpokenLanguage[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	credits: Credits;
	videos: Videos;
};

export type MovieDetail = {
	title: string;
	originalTitle: string;
	originalLanguage: string;
	tagline: string;
	description: string;
	genres: string[];
	date: string;
	average: number;
	budget: number;
	revenue: number;
	cover: string;
	poster: string;
	video: string;
	director: string[];
	cast: Actor[];
	productionCompanies: { id: number; name: string }[];
	productionCountries: { iso: string; name: string }[];
};

type Actor = {
	id: number;
	name: string;
	character: string;
	picture: string;
};

export type BelongsToCollection = {
	id: number;
	name: string;
	poster_path: string;
	backdrop_path: string;
};

export type Genre = {
	id: number;
	name: string;
};

export type ProductionCompany = {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
};

export type ProductionCountry = {
	iso_3166_1: string;
	name: string;
};

export type SpokenLanguage = {
	english_name: string;
	iso_639_1: string;
	name: string;
};

export interface Credits {
	cast: Cast[];
	crew: Cast[];
}

export interface Cast {
	adult: boolean;
	gender: number;
	id: number;
	known_for_department: Department;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: null | string;
	cast_id?: number;
	character?: string;
	credit_id: string;
	order?: number;
	department?: Department;
	job?: string;
}

export enum Department {
	Acting = 'Acting',
	Art = 'Art',
	Camera = 'Camera',
	CostumeMakeUp = 'Costume & Make-Up',
	Crew = 'Crew',
	Directing = 'Directing',
	Editing = 'Editing',
	Lighting = 'Lighting',
	Production = 'Production',
	Sound = 'Sound',
	VisualEffects = 'Visual Effects',
	Writing = 'Writing',
}

export interface Videos {
	results: Result[];
}

export interface Result {
	iso_639_1: string;
	iso_3166_1: string;
	name: string;
	key: string;
	site: string;
	size: number;
	type: string;
	official: boolean;
	id: string;
	published_at: string;
}
