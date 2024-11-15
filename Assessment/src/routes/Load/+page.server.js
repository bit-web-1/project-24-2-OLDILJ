/** @type {import('./$types').PageServerLoad} */
export function load({ cookies }) {
	const visited = cookies.get('visited');
	const GameInProgress = cookies.get('InProgress');
	cookies.set('visited', 'true', {path: '/'});
	
	return {
		GameInProgress
	};
}
