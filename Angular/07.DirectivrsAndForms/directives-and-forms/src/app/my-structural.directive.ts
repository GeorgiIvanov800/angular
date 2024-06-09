import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  Optional,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appMyStructural]',
  exportAs: 'appMyStructural',
})
export class MyStructuralDirective implements OnInit, OnChanges {
  @Input() appMyStructural: boolean = false;
  @Input() myTmpRef: TemplateRef<any> | undefined;

  constructor(
    @Optional() private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    // console.log(this.appMyStructural);
    // console.log(this.templateRef);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('On Changes ', this.appMyStructural);
    // console.log('myTmpRef', this.myTmpRef);
    // console.log('myTmpRef', this.templateRef);

    const template = this.templateRef || this.myTmpRef;

    if (this.appMyStructural) {
      //
      this.vcRef.createEmbeddedView(
        template,
        // context
        {
          myCustomValue: 'This is my custom message!',
          myNum: '0887352790',
          $implicit: 'Default Value',
        }
      );
    } else {
      this.vcRef.clear();
    }
  }
}
