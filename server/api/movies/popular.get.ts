
export default defineEventHandler(async () => {
  const movies =  await getPopularMovies()
  return normalizeMovie(movies)
})