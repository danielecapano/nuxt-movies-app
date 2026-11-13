export type TMDBResponse = {
  page: number
  results: TMDBMovie[]
  total_pages: number
  total_results: number
}

export type TMDBMovie = {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    title: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    softcore: boolean
    video: boolean
    vote_average: number
    vote_count: number
}

export type Movie = {
    id: number
    title: string
    originalTitle: string
    genres: string[] | undefined
    originalLanguage: string
    description: string
    poster: string
    cover: string
    releaseDate: string
    average: number
    
}