import { Image } from "../image";
import { Schedules } from "./schedules";

export interface Store {
    id: string;
    name: string;
    description?: string;
    logo: Image;
    banner: Image;
    schedules: Schedules;
    rating: number;
    orderMinValue?: number;
}