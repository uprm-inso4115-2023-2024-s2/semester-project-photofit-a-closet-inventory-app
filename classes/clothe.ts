export class Clothe {
    private _name: string;
    private _link: string;
    private _type: Clothe.Type;
    private _color: Clothe.Color;
    private _sleeveSize: number;

    constructor(name: string, link: string, type: Clothe.Type, color: Clothe.Color, sleeveSize: number) {
        this._name = name;
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

    get link(): string {
        return this._link;
    }

    set link(link: string) {
        this._link = link;
    }

    get type(): Clothe.Type {
        return this._type;
    }

    set type(type: Clothe.Type) {
        this._type = type;
    }

    get color(): Clothe.Color {
        return this._color;
    }

    set color(color: Clothe.Color) {
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

    serialize(): string {
        return JSON.stringify(this);
    }

    static deserialize(json: string): Clothe {
        const parse = JSON.parse(json);
        return new Clothe(parse._name, parse._link, parse._type, parse._color, parse._sleeveSize);
    }
}

export default function DefaultClothe(): Clothe {
    return new Clothe("",
        "https://content.instructables.com/FNN/H072/IDUQWTXF/FNNH072IDUQWTXF.jpg?auto=webp&frame=1&width=907&height=1024&fit=bounds&md=ca68a21d8b66a10d4f65d275a1393035",
        Clothe.Type.Unknown,
        Clothe.Color.Unknown,
        Clothe.SleeveSize.Unknown);
}

export namespace Clothe {
    export enum Type {
        Unknown,
        Shirt,
        Pants,
        Shoes
    }

    export enum Color {
        Unknown,
        Black,
        White,
        Gray,
        Navy,
        Blue,
        Green,
        Red,
        Yellow,
        Orange,
        Pink,
        Purple,
        Brown,
    }

    export enum SleeveSize {
        Unknown,
        None,
        Short,
        Medium,
        Long
    }
}
