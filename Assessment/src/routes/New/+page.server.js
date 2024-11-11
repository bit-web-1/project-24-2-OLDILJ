/** @type {import('./$types').PageServerLoad} */
export function load({ cookies }) {
	const priorRuns = cookies.get('priorRuns');
	const visited = cookies.get('visited');
	const InProgress = cookies.get('InProgress');
	cookies.set('visited', 'true', {path: '/'});
	
	return {
		InProgress: InProgress === 'true',
		visited: visited === 'true'
	};
}
