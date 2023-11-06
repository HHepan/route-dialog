import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('component2 route.params.subscribe', params);
    });
  }

  /**
   * 关闭窗口
   */
  onClose() {
    this.router.navigate(['../../'], {relativeTo: this.route});
  }
}
