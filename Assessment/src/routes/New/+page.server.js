/** @type {import('./$types').PageServerLoad} */
import * as db from '$lib/database.js';
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
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		db.setChar(data.get('CharSelect'));
		redirect(301, "/Main")
	}
};