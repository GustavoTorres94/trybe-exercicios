const obj = {
  a: 10,
  b: 'xulambis',
  c: 'sanduba',
}

const fun = (id, ...ids) => {
  console.log(id)
  console.log(ids)
}
fun(10, obj)