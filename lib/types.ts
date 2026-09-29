export type RecordData = {id:string; name?:string; active?:boolean; featured?:boolean; [key:string]:any};
export type Catalog = {vehicles:RecordData[];services:RecordData[];partners:RecordData[];categories:RecordData[];testimonials:RecordData[];banners:RecordData[];settings:RecordData[]};
export const entities = ['vehicles','services','partners','categories','testimonials','banners','settings'] as const;
