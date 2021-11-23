import { ServerModel } from "../models/server.model";
import { ServerType } from "../models/servertype.enum";

export class ServerList {
	static _server_list: ServerModel[] =[]; 

	get server_list() {
		return ServerList._server_list;
	}

	addServer(nome:string, descrizione:string){
		this.server_list.push(new ServerModel(nome,ServerType.SERVER,descrizione));
	}	
	addBlueprint(nome:string, descrizione:string){
		this.server_list.push(new ServerModel(nome,ServerType.BLUEPRINT,descrizione));
	}

	destroy (id:number){
		ServerList._server_list= ServerList._server_list.filter((v,i)=>id!=i);
	}
}