"use strict";
exports.__esModule = true;
exports.Perpustakaan = void 0;
var Perpustakaan = /** @class */ (function () {
    function Perpustakaan(pegawaiPerpus) {
        this.pegawaiPerpus = pegawaiPerpus;
    }
    Perpustakaan.prototype.getPegawaiPerpus = function () {
        return this.pegawaiPerpus;
    };
    Perpustakaan.prototype.setPegawaiPerpus = function (pegawaiPerpus) {
        this.pegawaiPerpus = pegawaiPerpus;
    };
    Perpustakaan.prototype.tampilkanInformasiPerpustakaan = function () {
        console.log("INFORMASI PEGAWAI YANG ADA DI PERPUSTAKAAN");
        console.log("Nama : ".concat(this.getPegawaiPerpus().getNama()));
        console.log("Nomor Pegawai : ".concat(this.getPegawaiPerpus().getNomorPegawai()));
        console.log("=========================");
        console.log("Daftar Pelanggan di perpustakaan");
        for (var _i = 0, _a = Perpustakaan.listPelanggan; _i < _a.length; _i++) {
            var pelanggan = _a[_i];
            console.log("Nama : ".concat(pelanggan.getNama(), "\nNomor Pelanggan : ").concat(pelanggan.getNomorPelanggan(), "\n"));
            var i = 0;
            for (var _b = 0, _c = pelanggan.getBukuPinjaman(); _b < _c.length; _b++) {
                var bukus = _c[_b];
                console.log("".concat(i + 1, ". ").concat(bukus.getJudul()));
                i++;
            }
            console.log();
        }
        console.log("=========================");
        console.log("Daftar Buku di perpustakaan");
        for (var _d = 0, _e = Perpustakaan.listBuku; _d < _e.length; _d++) {
            var bukus = _e[_d];
            console.log("Judul Buku : ".concat(bukus.getJudul()));
            console.log("Penulis : ".concat(bukus.getPenulis()));
            console.log("Jumlah Buku : ".concat(bukus.getJumlah()));
            console.log();
        }
    };
    Perpustakaan.prototype.pinjam = function (namaPelanggan, judulBuku) {
        var buku = this.cariBuku(judulBuku);
        if (buku === null) {
            throw new Error("Buku Not Found! ");
        }
        for (var _i = 0, _a = Perpustakaan.listPelanggan; _i < _a.length; _i++) {
            var pelanggan = _a[_i];
            if (pelanggan.getNama() === namaPelanggan) {
                pelanggan.tambahBuku(buku);
            }
        }
    };
    Perpustakaan.prototype.cariBuku = function (judulBuku) {
        var isValid = false;
        for (var _i = 0, _a = Perpustakaan.listBuku; _i < _a.length; _i++) {
            var bukus = _a[_i];
            if (bukus.getJudul() === judulBuku) {
                isValid = true;
                return bukus;
            }
        }
        if (!isValid) {
            return null;
        }
    };
    return Perpustakaan;
}());
exports.Perpustakaan = Perpustakaan;
