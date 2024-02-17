class Clothes {
    private _type: string;
    private _color: string;
    private _sleeveSize: number;

    constructor(type: string, color: string, sleeveSize: number) {
        this._type = type;
        this._color = color;
        this._sleeveSize = sleeveSize;
    }

    // Getter for type attribute
    get type(): string {
        return this._type;
    }

    // Setter for type attribute
    set type(type: string) {
        if (["pant", "skirt", "shirt", "shoe"].includes(type)) {
            this._type = type;
        } else {
            throw new Error("Invalid type");
        }
    }

    // Getter for color attribute
    get color(): string {
        return this._color;
    }

    // Setter for color attribute
    set color(color: string) {
        this._color = color;
    }

    // Getter for sleeveSize attribute
    get sleeveSize(): number {
        return this._sleeveSize;
    }

    // Setter for sleeveSize attribute
    set sleeveSize(sleeveSize: number) {
        if (sleeveSize >= 0) {
            this._sleeveSize = sleeveSize;
        } else {
            throw new Error("Sleeve size cannot be negative");
        }
    }
}