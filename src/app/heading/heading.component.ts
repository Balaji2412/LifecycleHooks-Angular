import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css'],
})
export class HeadingComponent implements OnChanges,OnChanges,DoCheck,OnDestroy {
  //@Input("text") text1:string='';
  @Input() text: string = '';
  @Input() text1:string[]=[];

  // called first as soon as the component is loaded.
  //called when ever the value of the property (string, int ,etc.,) is changed.
  // will not support capture the values of object ,array,etc.,
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['text'].previousValue !== '')
      console.log('ngONchange is called', changes['text']);
    if (changes['text'].previousValue == '') {
      console.log('changed value', changes['text'].currentValue);
    }
  }

  //#region 2nd to call after onchanges.
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //called after component is created
    //can be used to write the code - which component is required befor it is created.

    console.log("onInit is called !");
    this.text='Header component';
    //this.text1.push(this.text);
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.

    //called when ever keyboard or mouse event is called
    //since onchange cannot recogonize array or object value is being changed or modeified DoCheck is used.
    if(this.text1.length>0)
      console.log("ng do check is called")


  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

    // called when the component is destroyed

    console.log("OnDestroy method is called !")



  }
}
