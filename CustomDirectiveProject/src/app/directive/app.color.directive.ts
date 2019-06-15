import { Directive, ElementRef, Renderer, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[setColor]'
})
export class ColorDirective {

    // inject Renderer and ElementRef. These instances are provided by BrowserModule
    constructor(private renderer: Renderer, private ele: ElementRef) {
    }

    // defining property that map/link with selector
    @Input('setColor') setColor: string;
    
    // logic
    private applyColor(color: string): void {
        this.renderer.setElementStyle(this.ele.nativeElement, "backgroundColor", color);
    }
    
    // methods hosting events
    @HostListener('mouseenter')
    onMouseEnter(): void {
        this.applyColor(this.setColor || 'cyan');
    }
    @HostListener('mouseleave')
    onMouseLeave(): void {
        this.applyColor(null);
    }
}