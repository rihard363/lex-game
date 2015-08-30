if(rad.lenght == 0 && this.x < map.x && this.x > 0){
    s.a1();
}
else{
    s.a2();
}
if(rad.lenght == 0 && this.y < map.y && this.y > 0){
    s.a3();
}
else{
    s.a4();
}
if(rad.[0].x - this.x > 0 && rad[0].y == this.y){
    s.a1();
}
if(rad.[0].x - this.x < 0 && rad[0].y == this.y){
    s.a2();
}
if(rad.[0].y - this.y > 0 && rad[0].x == this.x){
    s.a3();
}
if(rad.[0].y - this.y < 0 && rad[0].x == this.x){
    s.a4();
}