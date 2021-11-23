import { Injectable } from "@angular/core";
import { ServerModel } from "../models/server.model";
import { ServerType } from "../models/servertype.enum";
import { LoggingService } from "./logging.service";
@Injectable()
export class ServerList {

	constructor(private logger: LoggingService){}

	server_list: ServerModel[] =[]; 
	addServer(nome:string, descrizione:string){
		this.logger.logToConsole("addServer");
		this.server_list.push(new ServerModel(nome,ServerType.SERVER,descrizione));
	}	
	addBlueprint(nome:string, descrizione:string){
		this.logger.logToConsole("addBlueprint");
		this.server_list.push(new ServerModel(nome,ServerType.BLUEPRINT,descrizione));
	}

	destroy (id:number){
		this.logger.logToConsole("destroy");
		this.server_list= this.server_list.filter((v,i)=>id!=i);
	}
}