import { ApiProperty } from "@nestjs/swagger";

export class RegistrarImagenDto {

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  base64: string;

}
