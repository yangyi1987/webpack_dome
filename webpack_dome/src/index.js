import { getName, getMap } from './hello.js'
import '../src/app.css'
import '../src/index.less'
import code from '../src/image/code.png';
import example from '../src/image/example.png'



document.write(getMap());
document.write(getName());

const img = document.createElement('img');
img.src = '../src/image/example.png'
document.write(getName());
const p = document.createElement('p')
p.className = "name";
p.innerHTML = getName();
document.body.append(p);
document.body.append(img);

