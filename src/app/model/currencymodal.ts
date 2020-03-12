export interface CurrencyModal {
    rates: any[];
    base: String;
    date: String;
}

export interface Data {
    key: string;
    value: string;
}
/*
export interface CurrencyHistoryModal {
    rates: [];
    base: String;
    start_at: String;
    end_at: String;
}*/

export class HistoryResp {
    rates: Rates[];
    base: string;
    start_at: Date;
    end_at: Date;
}

export class Money {
    key: string;
    value: number;
    increament:number;
}

export class Rates {
    date: Date;
    money: Money[];
}