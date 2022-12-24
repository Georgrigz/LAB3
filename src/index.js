import {Cache} from './cache.js'
const cache = new Cache();
cache.set('key1', 5, 3);
cache.set('key2', 'value', 1);
let val = cache.get('key2');
