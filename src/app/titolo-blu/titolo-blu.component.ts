import { AfterContentInit, AfterViewChecked, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-titolo-blu',
  templateUrl: './titolo-blu.component.html',
  styleUrls: ['./titolo-blu.component.css']
})
export class TitoloBluComponent implements AfterContentInit, AfterViewChecked {

	@ContentChild("titolo") titolo : ElementRef;

	ngAfterContentInit(){
		//console.log("Titolo per Content Child: ",this.titolo)
	}

	ngAfterViewChecked(){
		//console.log("Titolo per Content Child: ",this.titolo)
	}
}
