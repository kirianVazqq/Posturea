import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-publication-card',
  templateUrl: './publication-card.component.html',
  styleUrls: ['./publication-card.component.scss']
})
export class PublicationCardComponent {
  @Input() linkImage: string = 'Default Text';
  @Input() nameUser: string = 'Default Text';
  @Input() messageUser: string = 'Default Text';
  @Input() nameUserComments: string = 'Default Text';
  @Input() messageUserComments: string = 'Default Text';

}
