import { AsyncPipe } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter,
  OnDestroy, OnInit, Output, QueryList, ViewChild, ViewChildren, PipeTransform, Pipe, Host, HostListener } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { Observable, of, Subscription, combineLatest } from 'rxjs';
import { filter, first, map, takeWhile } from 'rxjs/operators';

import { ResizeSensor } from 'css-element-queries';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name = 'Angular';
  private sensor?: ResizeSensor;
  width = 0;
  height = 0;

  constructor(private elementRef: ElementRef) {
    this.sensor = new ResizeSensor(elementRef.nativeElement, () => this.onResize());
  }

  private onResize() {
    const { clientWidth: width, clientHeight: height } = (this.elementRef.nativeElement as HTMLElement);

    this.width = width;
    this.height = height;
  }

}