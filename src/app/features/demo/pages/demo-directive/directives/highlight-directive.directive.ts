import {Directive, ElementRef, Renderer2} from "@angular/core";

@Directive({
	selector: "[highlightDirective]",
})
export class HighlightDirectiveDirective {
	constructor(
		private el: ElementRef,
		private renderer: Renderer2,
	) {
		this.renderer.setStyle(
			this.el.nativeElement,
			"backgroundColor",
			"yellow",
		);
	}
}
