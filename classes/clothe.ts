export class Clothe {
    private _name: string;
    private _description: string;
    private _link: string;
    private _type: Clothe.Type;
    private _color: string;
    private _sleeveSize: number;

    constructor(name: string, description: string, link: string, type: Clothe.Type, color: string, sleeveSize: number) {
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

    get type(): Clothe.Type {
        return this._type;
    }

    set type(type: Clothe.Type) {
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

    serialize(): string {
        return JSON.stringify(this);
    }

    static deserialize(json: string): Clothe {
        const parse = JSON.parse(json);
        return new Clothe(parse._name, parse._description, parse._link, parse._type, parse._color, parse._sleeveSize);
    }
}

export default function DefaultClothe(): Clothe {
    return new Clothe("Clothe Name",
        "Clothe Description",
        "https://content.instructables.com/FNN/H072/IDUQWTXF/FNNH072IDUQWTXF.jpg?auto=webp&frame=1&width=907&height=1024&fit=bounds&md=ca68a21d8b66a10d4f65d275a1393035",
        Clothe.Type.Unknown,
        "Black",
        1);
}

export namespace Clothe {
    export enum Type {
        Unknown
    }
}