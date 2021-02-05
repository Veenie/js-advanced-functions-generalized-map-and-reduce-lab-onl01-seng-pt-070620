// Add your functions here

function map(src, func) {
  let r = []

  for (let i = 0; i < src.length; i++) {
    let e = src[i]
    r.push(func(e))
  }

  return r;
<<<<<<< HEAD
}

function reduce(src, func, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = func(src[i], r)
  }

  return r;
=======
>>>>>>> 472121997446476490d8a0b392b4758f40ff396a
}