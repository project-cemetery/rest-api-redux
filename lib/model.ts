export interface Entity {
    id: number
}

export interface Collection<T> extends Entity {
    member: T[]
    totalItems: number
}
