"use strict";
exports.__esModule = true;
var Pegawai_1 = require("./Pegawai");
var Perpustakaan_1 = require("./Perpustakaan");
function main() {
    try {
        Perpustakaan_1.Perpustakaan.listBuku = [];
        Perpustakaan_1.Perpustakaan.listPelanggan = [];
        Perpustakaan_1.Perpustakaan.listBuku = [];
        var pegawaiPerpus = new Pegawai_1.Pegawai("Tia", "1951502001111025");
        var perpustakaan = new Perpustakaan_1.Perpustakaan(pegawaiPerpus);
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
    catch (err) {
        console.log(err);
    }
}
main();
