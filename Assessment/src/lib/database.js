const db = new Map();

export function getCurRun(userid) {
	if (!db.get(userid)) {
		db.set(userid, [{
			id: crypto.randomUUID(),
			description: 'New Player',
		}]);
	}

	return db.get(userid);
}
export function setChar(selectedChar)
{
    if (!db.get(userid)) 
        {
            getCurRun()
        }
    db.set(userid, [{
        CurRunChar: selectedChar
    }])
    console.log(userid, CurRunChar)
}