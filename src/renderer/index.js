//import AyanTimer, {version} from './scripts/timer'

import Container from '@/pages/container/container'

//console.log(`${'\n'} %c ayanTimer v${version} %c https://github.com/ayan0312/ayanTimer ${'\n'}`, 'color: #803b39; background: #dc995a; padding:5px 0;', 'background: #efefef; padding:5px 0;');

// var timer = new AyanTimer({
//     container: document.querySelector("#app")  
// })
console.log(0)
document.querySelector("#app").innerHTML = new Container().html()