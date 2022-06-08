import { Buku } from "./Buku";
import { Pegawai } from "./Pegawai";
import { Pelanggan } from "./Pelanggan";

export class Perpustakaan{
    public static listPelanggan: Pelanggan[];
    public static listBuku: Buku[];
    constructor(
        public pegawaiPerpus: Pegawai,
    ){}
    public getPegawaiPerpus(): Pegawai{
        return this.pegawaiPerpus;
    }
    public setPegawaiPerpus(pegawaiPerpus: Pegawai): void {
        this.pegawaiPerpus = pegawaiPerpus;
    }
}