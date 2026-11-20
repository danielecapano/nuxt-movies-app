export default defineEventHandler(async () => {
	const [trending, popular, topRated, nowPlaying, upcoming] = await Promise.all(
		[
			getTrendingMovies(1, 10),
			getPopularMovies(1, 5),
			getTopRatedMovies(1, 5),
			getNowPlayingMovies(1, 5),
			getUpcomingMovies(1, 5),
		],
	);

	return {
		trendind: normalizeMovie(trending),
		popular: normalizeMovie(popular),
		topRated: normalizeMovie(topRated),
		nowPlaying: normalizeMovie(nowPlaying),
		upcoming: normalizeMovie(upcoming),
	};
});
