import { EventEmitter, Injectable } from "@angular/core";
import { ServerModel } from "../models/server.model";
import { ServerType } from "../models/servertype.enum";
import { LoggingService } from "./logging.service";
@Injectable()
export class ServerList {

	editEvent : EventEmitter<{edit:boolean,id:number}> = new EventEmitter<{edit:boolean,id:number}> ();

	constructor(private logger: LoggingService){}

	server_list: ServerModel[] =[
		// new ServerModel("test1",ServerType.SERVER,"server n 1"),
		// new ServerModel("test2",ServerType.BLUEPRINT,"blueprint n 1"),
		// new ServerModel("test3",ServerType.BLUEPRINT,"blueprint n 2"),
		// new ServerModel("test4",ServerType.SERVER,"server n 2")
	]; 
	addServer(nome:string, descrizione:string){
		this.logger.logToConsole("addServer");
		this.server_list.push(new ServerModel(nome,ServerType.SERVER,descrizione));
	}	
	addBlueprint(nome:string, descrizione:string){
		this.logger.logToConsole("addBlueprint");
		this.server_list.push(new ServerModel(nome,ServerType.BLUEPRINT,descrizione));
	}

	editAsServer(nome:string, descrizione:string, index:number){
		this.destroy(index,false);
		this.addServer(nome,descrizione);
	}	
	editAsBlueprint(nome:string, descrizione:string, index:number){
		this.destroy(index,false);
		this.addBlueprint(nome,descrizione);
	}

	destroy (id:number, notify?:boolean){
		notify=notify==undefined || notify;
		this.logger.logToConsole("destroy");
		this.server_list= this.server_list.filter((v,i)=>id!=i);
		console.log("id",id);
		if (notify) this.editEvent.emit({edit:false,id:id});
	}

	edit(id:number){
		this.editEvent.emit({edit:true,id:id});
	}
} 