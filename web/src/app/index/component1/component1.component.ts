import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

  /**
   * 关闭窗口
   */
  onClose() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
