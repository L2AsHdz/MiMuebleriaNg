import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AssemblyDetails, Piece } from 'src/models/model';
import { PieceService } from 'src/service/piece.service';

@Component({
  selector: 'app-template-details',
  templateUrl: './template-details.component.html',
  styleUrls: ['./template-details.component.css']
})
export class TemplateDetailsComponent implements OnInit {

  @Output() additionalItemsChange: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Input() additionalItems: AssemblyDetails[] = [];
  pieces: Piece[] = [];

  constructor(private pieceService: PieceService) { }

  ngOnInit(): void {
    this.getAllPieces();
  }

  agregarItem() {
    this.additionalItems.push(new AssemblyDetails());
    this.additionalItemsChange.emit(this.additionalItems);
  }

  getAllPieces() {
    this.pieceService.getAllPiece().subscribe({
      next: data => {
        this.pieces = data;
        console.log("Piezas: ", this.pieces)
      },
      error: err => {
        console.log("Error al obtener las piezas")
      }
    })
  }
  limpiarDatos() {
    this.additionalItems = [];
  }
}
