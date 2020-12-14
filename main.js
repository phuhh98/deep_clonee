const recurse = require("./recurse.js");

const deep = {
	arr: function(...args) {
		let value = [];
		let ref = [];
		let hasNoArray =  args.every( curr => !(curr instanceof Array));  // check input arguments
		if (!hasNoArray) {
			ref = args.flat();	// if contain array, flatting ref
		} else {
			ref = Array.from(arguments);
		}

		value = recurse.arrTrans(ref, value);

		return value;
	},

	
	obj: function(...args) {
		let value = {};
		let hasOnlyObjects =  args.every( curr => curr instanceof Object);	//check input arguments
		if (!hasOnlyObjects) {
			throw new Error("Input arguments has to be Object type");
		}

		let ref = args.reduce( (obj, curr) => Object.assign(obj, curr) , {});

		value = recurse.objTrans(ref,value);

		return value;
	}
}

module.exports = deep;