import {
	Movie,
	MovieDetails,
	TMDBMovie,
	TMDBMovieDetails,
} from '../types/types';

export function normalizeMovie(movies: TMDBMovie[]): Movie[] {
	return movies.map(movie => {
		const baseUrlCover = 'https://image.tmdb.org/t/p/w500';
		const baseUrlPoster = 'https://image.tmdb.org/t/p/w1280';
		return {
			id: movie.id,
			genres: genresById(movie.genre_ids) ?? 'Non disponibile',
			title: movie.title,
			originalTitle: movie.original_title,
			originalLanguage: formatLanguage(movie.original_language),
			description: movie.overview,
			cover: `${baseUrlCover}${movie.poster_path}`,
			poster: `${baseUrlPoster}${movie.backdrop_path}`,
			releaseDate: movie.release_date,
			average: movie.vote_average,
		};
	});
}

export function normalizeMovieDetails(movie: TMDBMovieDetails): MovieDetails {
	const genres = movie.genres.map(genre => genre.name);
	const baseUrlCover = 'https://image.tmdb.org/t/p/w500';
	const baseUrlPoster = 'https://image.tmdb.org/t/p/w1280';
	const baseUrlPicture = 'https://image.tmdb.org/t/p/w185';
	const directors = movie.credits.crew
		.filter(item => item.job === 'Director')
		.map(item => {
			return {
				id: item.id,
				name: item.name,
				picture: `${baseUrlPicture}${item.profile_path}`,
			};
		});
	const cast = movie.credits.cast
		.map(actor => {
			return {
				id: actor.id,
				name: actor.name,
				character: actor.character,
				picture: `${baseUrlPicture}${actor.profile_path}`,
			};
		})
		.slice(0, 6);
	const productionCompanies = movie.production_companies.map(company => {
		return {
			id: company.id,
			name: company.name,
		};
	});
	const productionCountries = movie.production_countries.map(country => {
		return {
			iso: country.iso_3166_1,
			name: country.name,
		};
	});

	const urlId = movie.videos.results[0]?.key;
	const video = `https://www.youtube.com/embed/${urlId}`;

	return {
		id: movie.id,
		title: movie.title,
		originalTitle: movie.original_title,
		originalLanguage: movie.original_language,
		tagline: movie.tagline,
		description: movie.overview,
		genres,
		date: movie.release_date,
		duration: movie.runtime,
		average: movie.vote_average,
		budget: movie.budget,
		revenue: movie.revenue,
		cover: `${baseUrlCover}${movie.poster_path}`,
		poster: `${baseUrlPoster}${movie.backdrop_path}`,
		director: directors ?? 'N/D',
		cast,
		productionCompanies,
		productionCountries,
		video,
	};
}
