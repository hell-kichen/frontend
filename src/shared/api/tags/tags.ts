import { Tag } from "./models";
import { api } from "../base";

const BASE_URL = "/api/tags";

export const getTags = (): Promise<Tag[]> => {
  return api.get(BASE_URL);
};

export type GetTagByIDParams = {
  tagID: string;
  [x: string]: any;
};

export const getTagsByID = ({ tagID }: GetTagByIDParams): Promise<Tag> => {
  return api.get(`${BASE_URL}/${tagID}`);
};
