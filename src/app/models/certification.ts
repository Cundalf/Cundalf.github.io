export class Certification {
    private _title: string;
    private _imagePath: string;

    constructor(title: string, imagePath: string) {
        this._title = title;
        this._imagePath = imagePath;
    }

    public get title(): string {
        return this._title;
    }

    public set title(value: string) {
        this._title = value;
    }

    public get imagePath(): string {
        return this._imagePath;
    }

    public set imagePath(value: string) {
        this._imagePath = value;
    }
}