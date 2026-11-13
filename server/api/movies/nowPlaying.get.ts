
export default defineEventHandler(async () => {
  const movies =  await getNowPlayingMovies()
  return normalizeMovie(movies)
})