import { Buku } from "./Buku";
import { Pelanggan } from "./Pelanggan";
import { Perpustakaan } from "./Perpustakaan";

export class Pegawai{
    constructor(
        private nama: string,
        private nomorPegawai: string,
    ){}
    public setNomorPegawai(nomorPegawai: string): void{
        this.nomorPegawai = nomorPegawai;
    }
    public getNomorPegawai(): string{
        return this.nomorPegawai;
    }
    public setNama(nama: string): void{
        this.nama = nama;
    }
    public getNama(): string{
        return this.nama;
    }
    public tampilkanInfoPegawai(): void{
        console.log(`
        Nama=${this.getNama}\n
        Nomor Pegawai = ${this.getNomorPegawai}
        `);
    }
    public menambahPelanggan(nama: string, nomorPelanggan: string){
        let isValid:boolean = false;
        for(let pelanggan of Perpustakaan.listPelanggan){
            if(pelanggan.getNama() === nama){
                isValid = true;
            }
        }
        if(!isValid){
            Perpustakaan.listPelanggan.push(new Pelanggan(nama, nomorPelanggan));
        }
    }
    public menambahBuku(judul: string, penulis: string, jumlah: number): void{
        let isValid: boolean = false;
        for(let buku of Perpustakaan.listBuku){
            if(buku.getJudul() === judul){
                buku.setJumlah(buku.getJumlah() + 1);
                isValid = true;
            }
        }
        if(!isValid){
            Perpustakaan.listBuku.push(new Buku(judul, penulis, jumlah));
        }
    }
}