import { Buku } from "./Buku";

export class Pelanggan{
    constructor(
        private nama: string,
        private nomorPelanggan: string,
        private bukuPinjaman: Buku[]
    ){}
    public setNama(nama: string): void{
        this.nama = nama;
    }
    public getNama(): string{
        return this.nama;
    }
    public setNomorPelanggan(nomorPelanggan: string){
        this.nomorPelanggan = nomorPelanggan;
    }
    public getNomorPelanggan(): string{
        return this.nomorPelanggan;
    }
    public tambahBuku(buku: Buku): void{}
    public tampilkanInfoPelanggan(): void{}
}
