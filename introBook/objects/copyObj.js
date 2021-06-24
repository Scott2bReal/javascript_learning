let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(obj, keys = Object.keys(obj)) {
  let funcObj = {};
  keys.forEach(key => {
    funcObj[key] = obj[key];
  });
  return funcObj;
};

  let newObj = copyObj(objToCopy);
  console.log(newObj);

  let newObj2 = copyObj(objToCopy, ['foo', 'qux']);
  console.log(newObj2);

  let newObj3 = copyObj(objToCopy, ['bar']);
  console.log(newObj3);
