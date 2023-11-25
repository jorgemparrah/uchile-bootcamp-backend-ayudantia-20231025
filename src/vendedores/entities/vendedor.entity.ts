import { Auto } from "src/autos/entities/auto.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";

@Entity({ name: "Vendedores" })
export class Vendedor {

  @PrimaryColumn({ name: "rut"})
  rut: string;

  @Column({ name: "nombre"})
  nombre: string;

  @ManyToMany(() => Auto)
  @JoinTable({
    name: "AutoPorVendedor",
    joinColumn: { name: "rutVendedor" },
    inverseJoinColumn: { name: "patenteAuto" }
  })
  autos: Auto[];

}
