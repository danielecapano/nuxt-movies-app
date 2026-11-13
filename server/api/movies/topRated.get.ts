
export default defineEventHandler(async () => {
  const movies =  await getTopRatedMovies()
  return normalizeMovie(movies)
})