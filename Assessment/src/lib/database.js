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
    if (!db.get(db.userid) || (db.CurRunChar)) 
        {
            getCurRun()
        }
    db.set(db.userid, [{
        CurRunChar: selectedChar
    }])
    console.log(db.userid, db.CurRunChar)
}