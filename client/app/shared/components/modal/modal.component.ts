import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {ModalType} from '../../enums/modal-types.enum';

@Component({
  selector: 'teams-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent {

  public isActive = false;

  @Input() public modalType: ModalType;
  @Input() public modalTitle: string;
  @Input() public actionButtonText: string;

  public params: any;
  public modalTypes = ModalType;

  @Output() Submit: EventEmitter<any> = new EventEmitter();
  @Output() Show: EventEmitter<any> = new EventEmitter();
  @Output() Hide: EventEmitter<any> = new EventEmitter();

  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();


  @HostListener('document:keydown', ['$event']) onKeyUpHandler(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.isActive) {
      this.close();
    }
    if (event.code === 'Enter' && this.isActive) {
      this.submit();
    }
  }

  public open() {
    this.Show.emit();
    this.isActive = true;
  }

  public close() {
    this.Hide.emit();
    this.isActive = false;
  }

  public submit() {
    this.Submit.emit();
    this.close();
  }

}
