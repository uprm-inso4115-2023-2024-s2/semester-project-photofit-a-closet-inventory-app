// Import the Clothe Class so we 
// can use it when creating an outfit
import { Clothe } from "./clothe";

export class Collection {
    private _clothes: Clothe[];
    private _name: string;
  
    /**
     * 
     * The minimum require of an outfit is that it must me composed
     * of two different pieces of clothing. If this requirement is
     * not met, an outfit cannot be created.
     */
    constructor(name: string, clothes: Clothe[]) {
      if (clothes.length < 2) {
        throw new Error("A Collection must contain at least two clothes.");
      }
      this._clothes = clothes;
      this._name = name;
    }
  
    get name(): string {
      return this._name;
    }
  
    set name(name: string) {
      this._name = name;
    }
  
    get clothes(): Clothe[] {
      return [...this._clothes]; // Return a copy to avoid mutation
    }
  
    /**
     * 
     * Method to push additional pieces to an Outfit
     */
    addClothes(...clothes: Clothe[]): void {
      this._clothes.push(...clothes);
    }
  
    /**
     * 
     * Method to remove pieces of clothing from an Outfit
     */
    removeClothes(...clothes: Clothe[]): void {
      this._clothes = this._clothes.filter((item) => !clothes.includes(item));
    }
  
    serialize(): string {
      return JSON.stringify({
        name: this._name,
        clothes: this._clothes.map((clothe) => clothe.serialize()),
      });
    }
  
    static deserialize(json: string): Collection {
      const data = JSON.parse(json);
      const clothes = data.clothes.map((data) => Clothe.deserialize(data));
      return new Collection(data.name, clothes);
    }
  }
  