import {
	Component,

	Input,
	OnChanges,

	SimpleChanges
} from '@angular/core';
import { ServerList } from '../services/serverlist.service';

@Component({
	selector: 'app-cockpit',
	templateUrl: './cockpit.component.html',
	styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnChanges {

	constructor(private server_list:ServerList){}
	
	newServerName;
	string = '';
	newServerContent: string = '';
	@Input() testo: string;

	ngOnChanges(changes: SimpleChanges) {
		if(! changes || ! changes["testo"]) return;
		console.log("changes detected")
		console.log(changes["testo"])
	}

	onAdd(server : boolean) {
		if (this.newServerContent === '' || this.newServerName === '') return;
		
		if (server) this.server_list.addServer	 (this.newServerName,this.newServerContent);
		else 		this.server_list.addBlueprint(this.newServerName,this.newServerContent);

		this.newServerContent = '';
		this.newServerName = '';
	}

	
}
