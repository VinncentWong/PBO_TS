import { Buku } from "./Buku";
import { Perpustakaan } from "./Perpustakaan";

export class Pelanggan{
    private bukuPinjaman: Buku[]
    constructor(
        private nama: string,
        private nomorPelanggan: string,
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
    public tambahBuku(buku: Buku): void{
        for(let tempBuku of Perpustakaan.listBuku){
            if(tempBuku.getJudul() === buku.getJudul()){
                if(tempBuku.getJumlah() >= 0 && this.bukuPinjaman.length <= 3){
                    this.bukuPinjaman.push(buku);
                } else {
                    console.log('Tidak bisa menambahkan buku karena melanggar syarat! ');
                }
            }
        }
    }
    public tampilkanInfoPelanggan(): void{
        let sentence:string = `
        Nama = ${this.getNama}\n
        Nomor Pelanggan = ${this.getNomorPelanggan}\n
        `
        if(this.bukuPinjaman.length === 0){
            sentence = sentence + `Buku Pinjaman = Tidak ada`;
        } else {
            sentence = sentence + `Buku Pinjaman = ${this.bukuPinjaman}`;
        }
    }
}
