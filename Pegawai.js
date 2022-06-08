"use strict";
exports.__esModule = true;
exports.Pegawai = void 0;
var Buku_1 = require("./Buku");
var Pelanggan_1 = require("./Pelanggan");
var Perpustakaan_1 = require("./Perpustakaan");
var Pegawai = /** @class */ (function () {
    function Pegawai(nama, nomorPegawai) {
        this.nama = nama;
        this.nomorPegawai = nomorPegawai;
    }
    Pegawai.prototype.setNomorPegawai = function (nomorPegawai) {
        this.nomorPegawai = nomorPegawai;
    };
    Pegawai.prototype.getNomorPegawai = function () {
        return this.nomorPegawai;
    };
    Pegawai.prototype.setNama = function (nama) {
        this.nama = nama;
    };
    Pegawai.prototype.getNama = function () {
        return this.nama;
    };
    Pegawai.prototype.tampilkanInfoPegawai = function () {
        console.log("\n        Nama=".concat(this.getNama, "\n\n        Nomor Pegawai = ").concat(this.getNomorPegawai, "\n        "));
    };
    Pegawai.prototype.menambahPelanggan = function (nama, nomorPelanggan) {
        var isValid = false;
        for (var _i = 0, _a = Perpustakaan_1.Perpustakaan.listPelanggan; _i < _a.length; _i++) {
            var pelanggan = _a[_i];
            if (pelanggan.getNama() === nama) {
                isValid = true;
            }
        }
        if (!isValid) {
            Perpustakaan_1.Perpustakaan.listPelanggan.push(new Pelanggan_1.Pelanggan(nama, nomorPelanggan));
        }
    };
    Pegawai.prototype.menambahBuku = function (judul, penulis, jumlah) {
        var isValid = false;
        for (var _i = 0, _a = Perpustakaan_1.Perpustakaan.listBuku; _i < _a.length; _i++) {
            var buku = _a[_i];
            if (buku.getJudul() === judul) {
                buku.setJumlah(buku.getJumlah() + 1);
                isValid = true;
            }
        }
        if (!isValid) {
            Perpustakaan_1.Perpustakaan.listBuku.push(new Buku_1.Buku(judul, penulis, jumlah));
        }
    };
    return Pegawai;
}());
exports.Pegawai = Pegawai;
