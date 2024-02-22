class Clothe {
    private _type: string;
    private _color: string;
    private _sleeveSize: number;

    constructor(type: string, color: string, sleeveSize: number) {
        this._type = type;
        this._color = color;
        this._sleeveSize = sleeveSize;
    }

    get type(): string {
        return this._type;
    }

    // Clothe type must be pant, skirt, shirt or shoe
    set type(type: string) {
        if (["pant", "skirt", "shirt", "shoe"].includes(type)) {
            this._type = type;
        } else {
            throw new Error("Invalid type");
        }
    }

    get color(): string {
        return this._color;
    }

    set color(color: string) {
        this._color = color;
    }

    get sleeveSize(): number {
        return this._sleeveSize;
    }

    // Sleeve size cannot be negative
    set sleeveSize(sleeveSize: number) {
        if (sleeveSize >= 0) {
            this._sleeveSize = sleeveSize;
        } else {
            throw new Error("Sleeve size cannot be negative");
        }
    }
}