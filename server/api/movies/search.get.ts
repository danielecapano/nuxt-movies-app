

export default defineEventHandler(async (event) => {
    const { query } = getQuery(event)
    
  const movies =  await searchMovies(query as string)
  return normalizeMovie(movies)
})