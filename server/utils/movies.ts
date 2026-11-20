import { tmdbFetch } from './tmdb';

export async function getPopularMovies(
	page: number = 1,
	limit: number = 20,
	region: string = 'IT',
) {
	const data = await tmdbFetch<TMDBResponse>('/movie/popular', {
		page,
		region,
	});
	return data.results.slice(0, limit);
}

export async function getNowPlayingMovies(
	page: number = 1,
	limit: number = 20,
	region: string = 'IT',
) {
	const data = await tmdbFetch<TMDBResponse>('/movie/now_playing', {
		page,
		region,
	});
	return data.results.slice(0, limit);
}

export async function getUpcomingMovies(
	page: number = 1,
	limit: number = 20,
	region: string = 'IT',
) {
	const data = await tmdbFetch<TMDBResponse>('/movie/upcoming', {
		page,
		region,
	});
	return data.results.slice(0, limit);
}

export async function getTopRatedMovies(
	page: number = 1,
	limit: number = 20,
	region: string = 'IT',
) {
	const data = await tmdbFetch<TMDBResponse>('/movie/top_rated', {
		page,
		region,
	});
	return data.results.slice(0, limit);
}

export async function getTrendingMovies(
	page: number = 1,
	limit: number = 20,
	region: string = 'IT',
) {
	const data = await tmdbFetch<TMDBResponse>('/trending/movie/day', { page });
	return data.results.slice(0, limit);
}

export async function searchMovies(
	query: string,
	page: number = 1,
	limit: number = 20,
) {
	const data = await tmdbFetch<TMDBResponse>('/search/movie', { query, page });
	return data.results.slice(0, limit);
}

export async function getDetailsMovie(id: number) {
	const data = await tmdbFetch(`/movie/${id}`);
	return data;
}
