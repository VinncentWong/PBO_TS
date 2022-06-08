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
    public tampilkanInfoPegawai(): void{}
    public menambahPelanggan(nama: string, nomorPelanggan: string){}
    public menambahBuku(judul: string, penulis: string, jumlah: number): void{}
}