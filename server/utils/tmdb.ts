
const config = useRuntimeConfig()

export async function tmdbFetch<T>(
  endpoint: string,
  params: {
    page?: number
    query?: string
    region?: string
  } = {}
): Promise<T> {
  return $fetch(`https://api.themoviedb.org/3${endpoint}`, {
    headers: {
      Authorization: `Bearer ${config.tmdbAccessToken}`,
      accept: 'application/json'
    },
    query: {
      language: 'it-IT',
      ...params
    }
  })
}





