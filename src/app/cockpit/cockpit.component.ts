import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	Output,
	SimpleChanges,
} from '@angular/core';

@Component({
	selector: 'app-cockpit',
	templateUrl: './cockpit.component.html',
	styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnChanges {
	@Output('server') serverAdded = new EventEmitter<{
		name: string;
		content: string;
	}>();
	@Output('blueprint') blueprintAdded = new EventEmitter<{
		name: string;
		content: string;
	}>();
	newServerName;
	string = '';
	newServerContent: string = '';
	@Input() testo: string;

	ngOnChanges(changes: SimpleChanges) {
		if(! changes || ! changes["testo"]) return;
		console.log("changes detected")
		console.log(changes["testo"])
	}

	onAddServer() {
		if (this.newServerContent === '' || this.newServerName === '') return;
		this.serverAdded.emit({
			name: this.newServerName,
			content: this.newServerContent,
		});
		this.newServerContent = '';
		this.newServerName = '';
	}

	onAddBlueprint() {
		if (this.newServerContent === '' || this.newServerName === '') return;
		this.blueprintAdded.emit({
			name: this.newServerName,
			content: this.newServerContent,
		});
		this.newServerContent = '';
		this.newServerName = '';
	}
}
