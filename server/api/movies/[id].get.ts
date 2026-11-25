import { normalizeMovieDetails } from '~~/server/utils/normalize';

export default defineEventHandler(async event => {
	const rawId = getRouterParam(event, 'id');

	if (!rawId) {
		throw createError({
			statusCode: 400,
			statusMessage: 'ID del film mancante',
		});
	}

	const id = Number(rawId);

	if (!Number.isInteger(id) || id <= 0) {
		throw createError({
			statusCode: 400,
			statusMessage: 'ID del film non valido',
		});
	}

	const movie = await getDetailsMovie(id);
	return normalizeMovieDetails(movie);
});
