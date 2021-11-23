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
import { ServerList } from './services/serverlist.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [ServerList]
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

	constructor(public serverlist : ServerList){}
	testo: string;

	ngDoCheck() {
		console.log("do check on appcompoent")
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


	@ViewChild('etichetta') etx: ElementRef;
	reset() {
		if (!this.etx || !this.etx.nativeElement) return;
		(this.etx.nativeElement as HTMLInputElement).value = '';
	}


}
