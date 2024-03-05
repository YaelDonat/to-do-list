import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[appLimitLength]'
})
export class LimitLengthDirective {

    constructor(private el: ElementRef) { }

    @HostListener('input', ['$event.target.value']) onInput(value: string) {
        if (value.length > 20) {
            this.el.nativeElement.value = value.substring(0, 20) + '...';
        }
    }
}
