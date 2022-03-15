import { Console } from 'console';
import URL from 'url';

let q = URL.parse('https://www.google.com/search?q=hello%5D&rlz=1C1CHWL_enIN982IN982&oq=hello%5D&aqs=chrome..69i57j35i39j0i67l7j46i10i67i199i465.3433j0j15&sourceid=chrome&ie=UTF-8');

//console.log(q.host);

//console.log(q.protocol);

//console.log(q.search);

//console.log(q.query);

//console.log(q.auth);

console.log(q.href);