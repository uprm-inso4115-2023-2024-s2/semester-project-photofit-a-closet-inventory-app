import { Clothe } from '@/classes/clothe';

export class Outfit {
  private _shirt: Clothe;
  private _pant: Clothe;
  private _shoe: Clothe;

  constructor(shirt: Clothe, pant: Clothe, shoe: Clothe) {
    if (shirt.type !== Clothe.Type.Shirt ||
        pant.type !== Clothe.Type.Pants ||
        shoe.type !== Clothe.Type.Shoes) {
      throw new Error('Invalid clothes types. Outfit must contain one shirt, one pant, and one shoe.');
    }
    this._shirt = shirt;
    this._pant = pant;
    this._shoe = shoe;
  }

  public getShirt(): Clothe {
    return this._shirt;
  }

  public getPant(): Clothe {
    return this._pant;
  }

  public getShoe(): Clothe {
    return this._shoe;
  }

  public setShirt(shirt: Clothe): void {
    if (shirt.type !== Clothe.Type.Shirt) {
      throw new Error('Invalid shirt type. Outfit must contain one shirt.');
    }
    this._shirt = shirt;
  }

  public setPant(pant: Clothe): void {
    if (pant.type !== Clothe.Type.Pants) {
      throw new Error('Invalid pant type. Outfit must contain one pant.');
    }
    this._pant = pant;
  }

  public setShoe(shoe: Clothe): void {
    if (shoe.type !== Clothe.Type.Shoes) {
      throw new Error('Invalid shoe type. Outfit must contain one shoe.');
    }
    this._shoe = shoe;
  }
}