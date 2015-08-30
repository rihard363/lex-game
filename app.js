
import Map from './classes/class.map.js';
import Knight from './classes/class.knight.js';
var world = new Map(10,10);
world.addPlayer(3, 7, 4,'Petya');
world.addPlayer(6, 10, 4,'Vano');
console.log(world);
for (var a = 0; a<100; a++ ) {
    world.step();
}
console.log(world);