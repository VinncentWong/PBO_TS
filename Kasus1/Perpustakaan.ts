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
    public tampilkanInformasiPerpustakaan(): void{
        console.log("INFORMASI PEGAWAI YANG ADA DI PERPUSTAKAAN");
        console.log(`Nama : ${this.getPegawaiPerpus().getNama()}`);
        console.log(`Nomor Pegawai : ${this.getPegawaiPerpus().getNomorPegawai()}`);
        console.log("=========================");
        console.log("Daftar Pelanggan di perpustakaan");
        for(let pelanggan of Perpustakaan.listPelanggan){
            console.log(
            `Nama : ${pelanggan.getNama()}\nNomor Pelanggan : ${pelanggan.getNomorPelanggan()}\n`);
            let i: number = 0;
            for(let bukus of pelanggan.getBukuPinjaman()){
                console.log(`${i + 1}. ${bukus.getJudul()}`);
                i++;
            }
            console.log();
        }
        console.log("=========================");
        console.log("Daftar Buku di perpustakaan");
        for(let bukus of Perpustakaan.listBuku){
            console.log(`Judul Buku : ${bukus.getJudul()}`);
            console.log(`Penulis : ${bukus.getPenulis()}`);
            console.log(`Jumlah Buku : ${bukus.getJumlah()}`);
            console.log();
        }
    }
    public pinjam(namaPelanggan: string, judulBuku: string): void{
        let buku: Buku = this.cariBuku(judulBuku);
        if(buku === null){
            throw new Error("Buku Not Found! ");
        }
        for(let pelanggan of Perpustakaan.listPelanggan){
            if(pelanggan.getNama() === namaPelanggan){
                pelanggan.tambahBuku(buku);
            }
        }
    }
    public cariBuku(judulBuku: string): Buku{
        let isValid:boolean = false;
        for(let bukus of Perpustakaan.listBuku){
            if(bukus.getJudul() === judulBuku){
                isValid = true;
                return bukus;
            }
        }
        if(!isValid){
            return null;
        }
    }
}