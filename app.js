
import Map from './classes/class.map.js';
import Knight from './classes/class.knight.js';
var world = new Map(10,10);
world.addPlayer(3, 7, 'Petya');
world.addPlayer(6, 10, 'Vano');
console.log(world);
console.log(world.getPlayers(7,8,5));