"use strict";
exports.__esModule = true;
exports.Pelanggan = void 0;
var Perpustakaan_1 = require("./Perpustakaan");
var Pelanggan = /** @class */ (function () {
    function Pelanggan(nama, nomorPelanggan) {
        this.nama = nama;
        this.nomorPelanggan = nomorPelanggan;
        this.bukuPinjaman = [];
    }
    Pelanggan.prototype.setNama = function (nama) {
        this.nama = nama;
    };
    Pelanggan.prototype.getNama = function () {
        return this.nama;
    };
    Pelanggan.prototype.setBukuPinjaman = function (buku) {
        this.bukuPinjaman = buku;
    };
    Pelanggan.prototype.getBukuPinjaman = function () {
        return this.bukuPinjaman;
    };
    Pelanggan.prototype.setNomorPelanggan = function (nomorPelanggan) {
        this.nomorPelanggan = nomorPelanggan;
    };
    Pelanggan.prototype.getNomorPelanggan = function () {
        return this.nomorPelanggan;
    };
    Pelanggan.prototype.tambahBuku = function (buku) {
        for (var _i = 0, _a = Perpustakaan_1.Perpustakaan.listBuku; _i < _a.length; _i++) {
            var tempBuku = _a[_i];
            if (tempBuku.getJudul() === buku.getJudul()) {
                if (tempBuku.getJumlah() >= 0 && this.bukuPinjaman.length <= 3) {
                    this.bukuPinjaman.push(buku);
                }
                else {
                    console.log('Tidak bisa menambahkan buku karena melanggar syarat! ');
                }
            }
        }
    };
    Pelanggan.prototype.tampilkanInfoPelanggan = function () {
        var sentence = "\n        Nama = ".concat(this.getNama, "\n\n        Nomor Pelanggan = ").concat(this.getNomorPelanggan, "\n\n        ");
        if (this.bukuPinjaman.length === 0) {
            sentence = sentence + "Buku Pinjaman = Tidak ada";
        }
        else {
            sentence = sentence + "Buku Pinjaman = ".concat(this.bukuPinjaman);
        }
    };
    return Pelanggan;
}());
exports.Pelanggan = Pelanggan;
