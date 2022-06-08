"use strict";
exports.__esModule = true;
exports.Buku = void 0;
var Buku = /** @class */ (function () {
    function Buku(judul, penulis, jumlah) {
        this.judul = judul;
        this.penulis = penulis;
        this.jumlah = jumlah;
    }
    Buku.prototype.setJudul = function (judul) {
        this.judul = judul;
    };
    Buku.prototype.getJudul = function () {
        return this.judul;
    };
    Buku.prototype.setJumlah = function (jumlah) {
        this.jumlah = jumlah;
    };
    Buku.prototype.getJumlah = function () {
        return this.jumlah;
    };
    Buku.prototype.setPenulis = function (penulis) {
        this.penulis = penulis;
    };
    Buku.prototype.getPenulis = function () {
        return this.penulis;
    };
    Buku.prototype.tampilkanInfoBuku = function () {
        console.log("Judul = ".concat(this.getJudul, "\n\n        Penulis = ").concat(this.getPenulis, "\n\n        Jumlah = ").concat(this.getJumlah));
    };
    return Buku;
}());
exports.Buku = Buku;
