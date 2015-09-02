



import Knight from './class.knight.js';
class Map {
	constructor(x,y) {
		this.x = x;
		this.y = y;
		this.knights = [ ];
	}
	addPlayer(x,y,r,name) {
		var p = new Knight(x,y,r,name);
		this.knights.push(p);
			}
	step() {
		for (var index = 0; index < this.knights.length; ++index) {
			this.knights[index].go(this);// передаю map в go
			}
	}
	getPlayers(x,y,r){
		var players = [];
		this.knights.forEach((e,i)=>{//для каждого элеента из массива рыцари, где е - элемент, i - номер элемента  
			if(e.x<=r+x || e.y<=r+y) {
				if (e.x != x && e.y != y){
				players.push(e);
				}
			}

		})
		return players;
	};
	
}







export default Map;




