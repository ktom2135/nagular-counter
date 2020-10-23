export class Counter{

    constructor(public account: number){}

    public increase():void{
        this.account++;
    }

    public decrease(): void{
        this.account--;
    }
}