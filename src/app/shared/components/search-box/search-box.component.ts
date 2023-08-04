import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit , OnDestroy {

  private deboncer:Subject<string> = new Subject<string>();

  private suscription?:Subscription;

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.suscription=this.deboncer
      .pipe(
        debounceTime(500) //tiempo de espera hasta que escribe
      )
      .subscribe( value =>{
        this.onDebounce.emit(value);
      })
  }

  ngOnDestroy(): void {
    this.suscription?.unsubscribe();
  }

  emitValue(value:string):void{
    this.onValue.emit(value);
  }

  onKeyPress(value:string){
    //console.log(value);
    this.deboncer.next(value);
  }



}
