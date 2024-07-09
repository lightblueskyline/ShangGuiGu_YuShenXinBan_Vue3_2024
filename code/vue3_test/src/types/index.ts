/**
 * 定義 Person 接口
 * 'export' 分別暴露
 */
export interface IPerson {
    ID: string;
    Name: string;
    Age: number;
};

/**
 * 自定義類型
 */
export type PersonList = Array<IPerson>;

/**
 * 自定義類型
 */
export type PersonList1 = IPerson[];