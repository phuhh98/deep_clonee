let arrTrans = function (ref, value = []) {
	for (let index of ref) {
		if ( ref[index] instanceof Array ) {
			value[index] = [];
			value[index] = arrTrans(ref[index], value[index]);
			continue;
		} else if ( ref[index] instanceof Object ) {
			value[index] = {};
			value[index] = objTrans(ref[index], value[index]);
			continue;
		} else {
			value[index] = ref[index];
		}
	}

	return value;
}

let objTrans = function (ref, value = []) {
	for ( let prop in ref ) {
		if ( ref[prop] instanceof Array ) {
			value[prop] = [];
			value[prop] = arrTrans(ref[prop], value[prop]);
			continue;
		} else if ( ref[prop] instanceof Object ) {
			value[prop] = {};
			value[prop] = objTrans(ref[prop], value[prop]);
			continue;
		} else {
			value[prop] = ref[prop];
		}
	}

	return value;
}

module.exports = {
	arrTrans: arrTrans,
	objTrans: objTrans
}