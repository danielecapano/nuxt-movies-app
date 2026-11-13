
export default defineEventHandler(async () => {
  const movies =  await getUpcomingMovies()
  return normalizeMovie(movies)
})