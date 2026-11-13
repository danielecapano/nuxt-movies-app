import { Movie, TMDBMovie } from "../types/types"

export function normalizeMovie(movies: TMDBMovie[]): Movie[] {
    return movies.map(movie => {
        const baseUrlCover = 'https://image.tmdb.org/t/p/w500'
        const baseUrlPoster = 'https://image.tmdb.org/t/p/w1280'
        return {
            id: movie.id,
            genres: genresById(movie.genre_ids) ?? 'Non disponibile',
            title: movie.title,
            originalTitle: movie.original_title,
            originalLanguage: formatLanguage(movie.original_language),
            description: movie.overview,
            cover: `${baseUrlCover}${movie.poster_path}`,
            poster: `${baseUrlPoster}${movie.backdrop_path}`,
            releaseDate: movie.release_date,
            average: movie.vote_average

        }
    })
}