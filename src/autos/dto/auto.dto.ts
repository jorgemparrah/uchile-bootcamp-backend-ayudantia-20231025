import { CompradorDto } from "src/compradores/dto/comprador.dto";
import { ImagenDto } from "./imagen.dto";

export class AutoDto {

  patente: string;
  marca: string;
  modelo: string;
  comprador: CompradorDto;
  imagenes: ImagenDto[];

}
