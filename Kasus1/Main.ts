import { Pegawai } from "./Pegawai";
import { Perpustakaan } from "./Perpustakaan";

function main(): void{
    try{
        Perpustakaan.listBuku = [];
        Perpustakaan.listPelanggan = [];
        Perpustakaan.listBuku = [];

        let pegawaiPerpus: Pegawai = new Pegawai("Tia", "1951502001111025");
        let perpustakaan: Perpustakaan = new Perpustakaan(pegawaiPerpus);

        pegawaiPerpus.menambahBuku("Tutorial Java", "Graita", 5);
        pegawaiPerpus.menambahBuku("Tutorial Golang", "Budi", 10);
        pegawaiPerpus.menambahBuku("Tutorial Typescript", "Shinta", 1);

        pegawaiPerpus.menambahPelanggan("Wildan", "1");
        pegawaiPerpus.menambahPelanggan("Adin", "2");

        perpustakaan.pinjam("Wildan", "Tutorial Java");
        perpustakaan.pinjam("Adin", "Tutorial Typescript");
        perpustakaan.pinjam("Wildan", "Tutorial Golang");
        perpustakaan.tampilkanInformasiPerpustakaan();
    }
    catch(err){
        console.log(err);
    }
}

main();