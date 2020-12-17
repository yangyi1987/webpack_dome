export function getName() {
  return "张三";
}

export function getAge() {
  return 23;
}

export function getMap() {
  let arr = [1,2,3,4,5]
  return arr.map(item=>{
    return item + 1;
  })
}
