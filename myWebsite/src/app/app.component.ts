import { Component } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  // Select all links with hashes
  smoothScrolling(el){
    var id = $(el).data('target');
    var $target = $('#' + id);
    console.log($target.length)
    $('html,body').animate({
        scrollTop: $target.offset().top
    }, 1000);
  };
}
