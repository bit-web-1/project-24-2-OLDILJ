/** @type {import('./$types').PageServerLoad} */
export function load({ cookies }) {
	const priorRuns = cookies.get('priorRuns')
	const visited = cookies.get('visited');
	cookies.set('visited', 'true', {path: '/'});
	return {
		visited: visited === 'true'
	};
}
