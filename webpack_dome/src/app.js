import {getAge ,getName} from  './hello'

document.write(getAge());
const p = document.createElement('p')
p.innerHTML = getName()
document.body.append(p);

