const genres_ids =  [
    {
      "id": 28,
      "name": "Azione"
    },
    {
      "id": 12,
      "name": "Avventura"
    },
    {
      "id": 16,
      "name": "Animazione"
    },
    {
      "id": 35,
      "name": "Commedia"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentario"
    },
    {
      "id": 18,
      "name": "Dramma"
    },
    {
      "id": 10751,
      "name": "Famiglia"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "Storia"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Musica"
    },
    {
      "id": 9648,
      "name": "Mistero"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Fantascienza"
    },
    {
      "id": 10770,
      "name": "televisione film"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "Guerra"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

 const genres = Object.fromEntries(
  genres_ids.map(({ id, name }) => [id, name])
)

export function genresById(ids: number[]) {
 
  return ids.map(id => 
    genres[id] ?? 'Non disponibile'
  )
}

export function capitalize(string: string | undefined) {
  if(string)
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const languageNames = new Intl.DisplayNames(['it'], {
  type: 'language'
})

export function formatLanguage(code: string) {
  return capitalize(languageNames.of(code)) ?? 'Non disponibile'
}

export function yearByDate(date: string | undefined) {
  if(!date) return 'N/D'
  return new Date(date).getFullYear()
}