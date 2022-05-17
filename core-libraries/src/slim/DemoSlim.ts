export class DemoSlim {
    id: number;
    last: String;
    address: String;
    education: String;


    constructor(id?: number, last?: String, address?: String, education?: String) {
        this.id = id;
        this.last = last;
        this.address = address;
        this.education = education;
    }

    public get getId(): number {
        return this.id;
    }

    public set setId(value: number) {
        this.id = value;
    }

    public get getLast(): String {
        return this.last;
    }

    public set setLast(value: String) {
        this.last = value;
    }

    public get getAddress(): String {
        return this.address;
    }
    public set setAddress(value: String) {
        this.address = value;
    }

    public get getEducation(): String {
        return this.education;
    }
    public set seteducation(value: String) {
        this.education = value;
    }
}
