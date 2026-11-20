export async function getCompaniesLogos() {
	const data = await tmdbFetch(`/company/17/images`);
	return data;
}
