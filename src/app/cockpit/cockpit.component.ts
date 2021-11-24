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

	modeEdit : boolean = false;
	indexEdit: number = undefined;

	constructor(private server_list:ServerList){
		server_list.editEvent.subscribe(
			(status) => 
			{
				let switched:boolean= status.edit&&this.modeEdit && this.indexEdit==status.id;
				if( switched ){
					this.clearField();
					return;
				}
				if(status.edit){
					this.modeEdit=true;
					this.indexEdit=status.id
					this.takeField(status.id);
				} else {
					this.modeEdit=this.indexEdit!=status.id; 
					this.indexEdit=this.indexEdit>status.id ? this.indexEdit-1 : this.indexEdit;
				}

			}
		)
	}
	
	newServerName:string = '';
	newServerContent: string = '';
	@Input() testo: string;

	ngOnChanges(changes: SimpleChanges) {
		if(! changes || ! changes["testo"]) return;
		//console.log("changes detected")
		//console.log(changes["testo"])
	}

	onAdd(server : boolean) {
		if (this.newServerContent === '' || this.newServerName === '') return;
		
		if (this.modeEdit){
			if (server) this.server_list.editAsServer    (this.newServerName,this.newServerContent, this.indexEdit);
			else        this.server_list.editAsBlueprint (this.newServerName,this.newServerContent, this.indexEdit);
		} else {
			if (server) this.server_list.addServer	 (this.newServerName,this.newServerContent);
			else 		this.server_list.addBlueprint(this.newServerName,this.newServerContent);
		}

		this.clearField();
	}

	private clearField():void{
		this.newServerContent = '';
		this.newServerName = '';
		this.modeEdit=false;
		this.indexEdit=undefined;
	}

	private takeField(id:number):void{
		this.server_list.server_list.forEach((v,i)=>{	
			if(id==i){
				this.newServerName		= v.name;
				this.newServerContent	= v.content;
			}
		})
	}




	
}
