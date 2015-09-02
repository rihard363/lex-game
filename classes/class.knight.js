class Knight {
	constructor(x,y,r,name) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.name = name;
	}
	go(map){
		var rad = map.getPlayers(this.x,this.y,this.r);
		var poss = this.possibility(map,rad);// посылаем переменные из go  в possibility
		this.think(map,rad,poss);// Данные две строки  позволяют мне вызвать массив s из possibility и использовать его в select
		 }
	possibility(map,rad){
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
	think(map,rad,poss){
		var step = null;
		console.log('---------------', rad);
		poss.forEach((e,i)=> {
			console.log(e);
			switch (e.name) {
				case 'Right':
					if(rad.length == 0 && this.x - map.x/2 < 0){
	    				step = e;
					}
					if(rad.length != 0 && rad[0].x > this.x){
	    				step = e;
					}
					break;
				case 'Left':
					if(rad.length == 0 && this.x - map.x/2 > 0){
	    				step = e;
					}
					if(rad.length != 0 && rad[0].x < this.x){
	    				step = e;
					}
					break;
				case 'Down':
					if(rad.length == 0 && this.y - map.y/2 > 0){
	    				step = e;
					}
					if(rad.length != 0 && rad[0].y < this.y ){
	    				step = e;
					}
					break;
				case 'Up':
					if(rad.length == 0 && this.y - map.y/2 < 0){
		    			step=e;
					}
					if(rad.length != 0 && rad[0].y > this.y){
	    				step = e;
					}
					break;
			}
		})
		return (step.action());
	}
}

/*создать методы. 1 интерфейс (точка вхождения), 2 определяется с массивом возможностей и фильтрует возможности, 4 исполняет любое действие*/
//сделать движение рыцарей к определенной точке


export default Knight;