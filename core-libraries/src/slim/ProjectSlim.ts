export class ProjectSlim {
    id: number;
    name: String;
    guiId: String;

    constructor(id?: number, name?: String, guiId?: String) {
        this.id = id;
        this.name = name;
        this.guiId = guiId;
    }

    public get getId():number {
        return this.id;
    }

    public set setId(value: number) {
        this.id = value;
    }

    public get getProjectName(): String {
        return this.name;
    }

    public set setProjectName(value: String) {
        this.name = value;
    }

    public get getGuiId(): String {
        return this.guiId;
    }

    public set setGuiId(value: String) {
        this.guiId = value;
    }
}