import { Comprador } from "src/compradores/entities/comprador.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Imagen } from "./imagen.entity";

@Entity({ name: "Autos" })
export class Auto  {

  @PrimaryColumn({ name: "patente"})
  patente: string;

  @Column({ name: "marca"})
  marca: string;

  @Column({ name: "modelo"})
  modelo: string;

  @Column({ name: "rutComprador"})
  rutComprador: string;

  @ManyToOne(() => Comprador)
  @JoinColumn({ name: "rutComprador"})
  comprador: Comprador;

  @OneToMany(() => Imagen, (i) => i.auto)
  imagenes: Imagen[];

}