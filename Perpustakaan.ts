export class Perpustakaan{
    constructor(
        private listBuku: Buku[],
        public pegawaiPerpus: Pegawai,
        public listPelanggan: Pelanggan[]
    ){}
    
}