import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
  name: 'Thruks',
  power: 500,
}];

@Output()

public onDelete: EventEmitter<string> = new EventEmitter();

onDeleteCharacter( id?:string ): void {
  if ( !id ) return;
  // TODO: Emitir el ID del personaje
    this.onDelete.emit( id );
}
}

