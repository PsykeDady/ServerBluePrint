import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
	selector: 'app-server-element',
	templateUrl: './server-element.component.html',
	styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnDestroy {
	@Input('srv') server: { name: string; type: string; content: string };

	@Input() id: number;

	@Output() destroy= new EventEmitter<number>();

	onDestroy() {
		this.destroy.emit(this.id);
	}

	ngOnDestroy(){
		console.log(`${this.id} destroyed`)
	}

	coloreBody() {
		return this.server.type === AppComponent.SERVER_TYPE
			? {
					color: 'red',
					'font-weight': 'bold',
			  }
			: { 'font-style': 'italic' };
	}
}
