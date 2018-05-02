import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // 接受父组件方法
  @Output() sidenav = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  sidenavToggle(){
    // 发射事件
    this.sidenav.emit();
  }
}
