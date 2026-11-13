

export default defineEventHandler(async () => {
    
  const [trending, popular, topRated, nowPlaying, upcoming] = await Promise.all([
    getTrendingMovies(1, 10), getPopularMovies(1,10), getTopRatedMovies(1,10), getNowPlayingMovies(1,10), getUpcomingMovies(1,10)
  ])

  return {trendind: normalizeMovie(trending), popular: normalizeMovie(popular), topRated: normalizeMovie(topRated), nowPlaying: normalizeMovie(nowPlaying), upcoming: normalizeMovie(upcoming)}
})