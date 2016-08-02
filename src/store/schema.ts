export enum FilterType {
    All,
    Active,
    Completed
}

export interface Item {
    id: string,
    text: string,
    completed: boolean
}

export interface StateTree {
    items: Item[],
    textboxValue: string,
    itemsLeft: number,
    editItemId: string,
    editItemText: string,
    filter: FilterType
}