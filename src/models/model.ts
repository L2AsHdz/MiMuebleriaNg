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
  instruction !: string;
  description !: string;
}
