



class Knight {
	constructor(x,y,name) {
		this.name = name;
		this.x = x;
		this.y = y;
	}
	go(x,y,a){
		switch(a){
			case 'left':
			this.x--;
			break;
			case 'right':
			this.x++;
			break;
			case 'up':
			this.y++;
			break;
			case 'down':
			this.y--;
			break;
		}
	}
}

/*создать два метода, первый должен отвечать за движения,
 а второй у объекта map метод getplayers у кторого я буду запрашивать массив игроков в квадрате*/



export default Knight;