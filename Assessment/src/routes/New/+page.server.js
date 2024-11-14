/** @type {import('./$types').PageServerLoad} */
import { redirect } from '@sveltejs/kit';
export function load({ cookies }) {
	const priorRuns = cookies.get('priorRuns');
	const visited = cookies.get('visited');
	const InProgress = cookies.get('InProgress');
	cookies.set('visited', 'true', {path: '/'});
	//redirect(301, '/Home');
	return {
		InProgress: InProgress === 'true',
		visited: visited === 'true'
	};
}
