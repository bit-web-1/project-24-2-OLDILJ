const db = new Map();

export function getCurRun(userid) {
	if (!db.get(userid)) {
		db.set(userid, [{
			id: crypto.randomUUID(),
			description: 'New Player',
		}]);
	}

	$: return db.get(userid);
}
export function getId()
{
    if (!db.get(db.userid))
        {
            db.set(crypto.randomUUID(), [{
                id: crypto.randomUUID(),
                description: 'New Player',
            }]);
        }
        return(db.userid);
}
export function setChar(selectedChar)
{
    $: if (!db.get(db.userid))
        {
            db.set(db.userid, [{
                id: crypto.randomUUID(),
                description: 'New Player',
            }]);
        }
        db.set(db.userid, [{
        CurRunChar: selectedChar
    }])
    $: return db.get(db.userid,db.CurRunChar);
    $: console.log(db.userid, db.CurRunChar)
}
export function getChar()
{
    $: console.log(db.CurRunChar, "test")
    $: return db.get(db.CurRunChar)
}