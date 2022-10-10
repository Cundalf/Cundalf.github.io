export enum PortfolioType {
    GAMEDEV,
    SOFTWAREDEV
}

export class Portfolio {
    private _name: string;
    private _imagePath: string;
    private _modalReference: string;
    private _portfolioType: PortfolioType;

    constructor(name: string, imagePath: string, modalReference: string, portfolioType: PortfolioType) {
        this._name = name;
        this._imagePath = imagePath;
        this._modalReference = modalReference;
        this._portfolioType = portfolioType;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get imagePath(): string {
        return this._imagePath;
    }

    public set imagePath(value: string) {
        this._imagePath = value;
    }

    public get modalReference(): string {
        return this._modalReference;
    }

    public set modalReference(value: string) {
        this._modalReference = value;
    }

    public get portfolioType(): PortfolioType {
        return this._portfolioType;
    }

    public set portfolioType(value: PortfolioType) {
        this._portfolioType = value;
    }
}