import { ImageData } from "../types/ImagesType";

export const handleCharById = (characters: Array<string>) =>
  characters.map((char) => {
    const match: RegExpMatchArray | null = char.match(/(\d+)/);
    return match[0];
  });

export const sanitizeCharsData = (data: any) => {
  return data.map((d: any, key: number) => {
    const match = d.url.match(/(\d+)/);
    return { ...d, id: match[0] };
  });
};

export const transformCharsData = (charsData: any, imgData: Array<ImageData>) =>
  charsData?.map((char: any) => {
    const data = imgData.find((d) => char.name === d.name);
    return { ...char, image: data?.image };
  });

export const excludeName = (name: string) => {
  switch (name) {
    case "Roos Tarpals":
      return name;
    case "Shmi Skywalker":
      return name;
    case "Ratts Tyerel":
      return name;
    case "Gasgano":
      return name;
    case "Adi Gallia":
      return name;
    case "Saesee Tiin":
      return name;
    case "Yarael Poof":
      return name;
    case "Cordé":
      return name;
    case "Luminara Unduli":
      return name;
    case "Dexter Jettster":
      return name;
    case "San Hill":
      return name;
    case "Wedge Antilles":
      return name;
    case "Lobot":
      return name;
    case "Mon Mothma":
      return name;
  }
};
