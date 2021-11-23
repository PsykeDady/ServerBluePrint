import { ServerModel } from "../models/server.model";
import { ServerType } from "../models/servertype.enum";

export class ServerList {
	server_list: ServerModel[] =[]; 
	addServer(nome:string, descrizione:string){
		this.server_list.push(new ServerModel(nome,ServerType.SERVER,descrizione));
	}	
	addBlueprint(nome:string, descrizione:string){
		this.server_list.push(new ServerModel(nome,ServerType.BLUEPRINT,descrizione));
	}

	destroy (id:number){
		this.server_list= this.server_list.filter((v,i)=>id!=i);
	}
}