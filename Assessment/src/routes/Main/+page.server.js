/** @type {import('./$types').PageServerLoad} */
export function load({ cookies }) {
	const visited = cookies.get('visited');
	const GameInProgress = cookies.get('InProgress');
	cookies.set('visited', 'true', {path: '/'});
	cookies.set('InProgress','true', {path: '/'});
	
	return {
		visited: visited === 'true',
		InProgress: GameInProgress === 'true'
	};
}
