export default defineEventHandler(async () => {
	const logos = await getCompaniesLogos();
	return logos;
});
