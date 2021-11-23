import { Component, Input, OnDestroy } from '@angular/core';
import { ServerModel } from '../models/server.model';
import { ServerType } from '../models/servertype.enum';
import { ServerList } from '../services/serverlist.service';

@Component({
	selector: 'app-server-element',
	templateUrl: './server-element.component.html',
	styleUrls: ['./server-element.component.css'],
	providers: [ServerList]
})
export class ServerElementComponent implements OnDestroy {

	constructor(private serverlist:ServerList){}

	@Input('srv') server: ServerModel;

	@Input() id: number;

	onDestroy(){
		this.serverlist.destroy(this.id);
	}

	ngOnDestroy(){
		console.log(`${this.id} destroyed`)
	}

	coloreBody() {
		return this.server.type === ServerType.SERVER
			? {
					color: 'red',
					'font-weight': 'bold',
			  }
			: { 'font-style': 'italic' };
	}
}
