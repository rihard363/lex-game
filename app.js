
import Map from './classes/class.map.js';
import Knight from './classes/class.knight.js';
var world = new Map(10,10);
world.addPlayer(9, 1, 1,'Petya');
world.addPlayer(1, 10, 1,'Vano');
console.log(world);
for (var a = 0; a<2; a++ ) {
    
        world.step();
}
console.log(world);
