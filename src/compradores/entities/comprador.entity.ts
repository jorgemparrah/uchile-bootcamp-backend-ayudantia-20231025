import { Auto } from "src/autos/entities/auto.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity({ name: "Compradores" })
export class Comprador  {

  @PrimaryColumn({ name: "rut"})
  rut: string;

  @Column({ name: "nombre"})
  nombre: string;

  @OneToMany(() => Auto, (a) => a.comprador)
  autos: Auto[];

}
