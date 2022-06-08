export class Buku{
    constructor(
        private judul: string,
        private penulis: string,
        private jumlah: number
    ){}
    public setJudul(judul: string): void{
        this.judul = judul;
    }
    public getJudul(): string{
        return this.judul;
    }
    public setJumlah(jumlah: number): void{
        this.jumlah = jumlah;
    }
    public getJumlah(): number{
        return this.jumlah;
    }
    public setPenulis(penulis: string): void{
        this.penulis = penulis;
    }
    public getPenulis(): string{
        return this.penulis;
    }
    public tampilkanInfoBuku(): void{
        console.log(
        `Judul = ${this.getJudul}\n
        Penulis = ${this.getPenulis}\n
        Jumlah = ${this.getJumlah}`
        );
    }
}