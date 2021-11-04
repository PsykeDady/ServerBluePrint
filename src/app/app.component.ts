import {
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	Component,
	DoCheck,
	ElementRef,
	OnInit,
	ViewChild,
} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
	static readonly SERVER_TYPE = 'server';
	static readonly BLUEPRINT_TYPE = 'blueprint';

	serverElements: { name: string; type: string; content: string }[] = [];
	testo: string;

	ngDoCheck() {
		console.log("do check on appcompoent")
	}

	constructor() {
		console.log('app.component constructor');
	}

	ngOnInit() {
		console.log('ng on init app.component');
	}

	ngAfterContentInit() {
		console.log("content init on app component")
	}

	ngAfterContentChecked() {
		console.log("content checked on component")
	}

	ngAfterViewInit() {
		console.log("view init on app component")
	}

	ngAfterViewChecked() {
		console.log("view checked on component")
	}


	onServerAdded(data: { name: string; content: string }) {
		this.serverElements.push({
			type: 'server',
			name: data.name,
			content: data.content,
		});
	}
	onBlueprintAdded(data: { name: string; content: string }) {
		this.serverElements.push({
			type: 'blueprint',
			name: data.name,
			content: data.content,
		});
	}
	@ViewChild('etichetta') etx: ElementRef;
	reset() {
		if (!this.etx || !this.etx.nativeElement) return;
		(this.etx.nativeElement as HTMLInputElement).value = '';
	}

	onDestroy(id:number){
		this.serverElements=this.serverElements.filter((v,i)=> i!=id)
	}
}
