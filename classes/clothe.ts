enum Type {
    Pant, Skirt, Shirt, Shoe
}

class Clothe {
    private _name: string;
    private _description: string;
    private _link: string;
    private _type: Type;
    private _color: string;
    private _sleeveSize: number;

    constructor(name: string, description: string, link: string, type: Type, color: string, sleeveSize: number) {
        this._name = name;
        this._description = description;
        this._link = link;
        this._type = type;
        this._color = color;
        this._sleeveSize = sleeveSize;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get description(): string {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }

    get link(): string {
        return this._link;
    }

    set link(link: string) {
        this._link = link;
    }

    get type(): Type {
        return this._type;
    }

    set type(type: Type) {
        this._type = type;
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