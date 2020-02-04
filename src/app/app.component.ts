import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Llama';
  info: string = 'About';
  flag: boolean = false;


  //the circular patterns are randomly generated on loading the page
  ngOnInit() {
    var canvas: any = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = 650;
    var ctx = canvas.getContext("2d");
    
    for(var i=0; i<5000; i++) {

      var x = Math.floor(Math.random()*3000);
      var y = Math.floor(Math.random()*650);
      var radius = Math.floor(Math.random()*20);
      
      //random color generation
      var r = Math.floor(Math.random()*255);
      var g = Math.floor(Math.random()*255);
      var b = Math.floor(Math.random()*255);
        
      //create circles
      ctx.beginPath();
      ctx.font = "20px Georgia";
      ctx.strokeStyle = "black";
      ctx.arc(x,y,radius,Math.PI*2,0,false);
      ctx.fillStyle = "rgba(" + r + "," + g + "," + b + ",1)";
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    }
  }
  
  showAboutInfo(val: boolean) {
    this.info = 'About';
  }

  showHistoryInfo(val: boolean) {
    this.info = 'History';
  }

  showBehaviorInfo(val: boolean) {
    this.info = 'Behavior';
  }

  showCharInfo(val: boolean) {
    this.info = 'Char';
  }

  //function to display modal
  showModal(val: boolean) {
    var modal = document.getElementById("myModal");
    var close = document.getElementById("close");
    modal.style.display = "block";

    window.onclick = function(event) {
      if(event.target == modal) {
        modal.style.display = "none";
      }
    }

    close.onclick = function(event) {
      modal.style.display = "none";
    }
  }

}
