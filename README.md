# Deep
Support two methods to make a deep copy of input objects or arrays.

### Installations
```sh
	npm install --save deep_clonee
```

### Usage
```javascript
	const deep = require("deep")
```

```javascript
	//for Array
	let outPutArray = deep.arr(/argument(s)/);
	//arguments can be array(s), or a list of elements
	
	//for Object
	let outPutObject = deep.obj(/argument(s)/);
	//here, arguments has to be a list of objects separate by ','  
	//or an array of objects
```