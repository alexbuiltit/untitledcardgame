import { IResourceCardCost } from "./IResourceCardCost";
import { TResourceColour } from "../types/TResourceColour";

/**
 * A game resource card
 *
 * @export
 * @interface IResourceCard
 */
export interface IResourceCard {
  key: string;
  id: string;
  colour: TResourceColour;
  value: number;
  cost: IResourceCardCost;
}
