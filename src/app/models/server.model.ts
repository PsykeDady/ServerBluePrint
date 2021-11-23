import { ServerType } from "./servertype.enum";

export class ServerModel {


	constructor(public name:string, public  type:ServerType, public content:string){	}
}