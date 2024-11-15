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
    return db.get(userid,db.CurRunChar);
    console.log(db.userid, db.CurRunChar)
}
export function getChar()
{
    return db.get(db.CurRunChar)
}