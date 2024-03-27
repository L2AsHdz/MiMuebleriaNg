export class Furniture{
  id !: number;
  assembly!: Assembly;
  assemblyDate !: Date | string;
  sellingPrice!: number;
  assemblyCost!: number;
  status !: boolean;

}
export class Assembly{
  id !: number;
  name !: string;
  instructions !: string;
  description !: string;
  assemblyDetails !: AssemblyDetails[];
}
export class AssemblyDetails{
  id !: number;
  piece !: Piece;
  assembly !: Assembly;
  quantity !: number;
}
export class Piece{
  id !: number;
  name !: string;
  unitPrice !: number;
  minimumStock !: number;
}
