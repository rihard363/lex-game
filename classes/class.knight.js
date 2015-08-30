

class Knight {
	constructor(x,y,r,name) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.name = name;
	}
	go(map){
		var poss = this.possibility(map);
		this.select(poss);// Данные две строки  позволяют мне вызвать массив s из possibility и использовать его в select
		 }
	possibility(map){
		var rad = map.getPlayers(this.x,this.y,this.r);
		var s = [];
		var a1 = {name: 'Right',action: (()=>{this.x++})};
		var a2 ={name: 'Left',action: (()=>{this.x--})};
		var a3 ={name: 'Up',action: (()=>{this.y++})};
		var a4 ={name: 'Down',action: (()=>{this.y--})};
		var valueX1 = true;
		rad.forEach((e,i)=>{
		if (e.x == this.x+1) {
			valueX1 = false;
			}
		})
		if (this.x < map.x && valueX1 == true) {
			s.push(a1);
			}
		var valueX2 = true;
		rad.forEach((e,i)=>{
		if (e.x == this.x-1) {
			valueX2 = false;
			}
		})
		if (this.x < map.x && valueX2 == true && this.x-1>0) {
			s.push(a2);
			}
		var valueY1 = true;
		map.knights.forEach((e,i)=>{
			if (e.y == this.y+1) {
				valueY1 = false;
			}
		})
		if (this.y < map.x && valueY1 == true) {
			s.push(a3);
		}
		var valueY2 = true;
		map.knights.forEach((e,i)=>{
			if (e.y == this.y-1) {
			valueY2 = false;
			}
		})
		if (this.y < map.x && valueY2 == true && this.y-1>0) {
			s.push(a4);
			}
		return s;
		}
	think(){	
	select(s){
		
			
	}	
	}

/*создать методы. 1 интерфейс (точка вхождения), 2 определяется с массивом возможностей и фильтрует возможности, 4 исполняет любое действие*/
//сделать движение рыцарей к определенной точке


export default Knight;