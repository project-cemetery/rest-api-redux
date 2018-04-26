export interface Parameter {
    key: string
    value: string
}

export const objectToParameters = (obj: any = {}): Parameter[] =>
    Object.keys(obj).map((key) => ({
        key,
        value: obj[key].toString(),
    } as Parameter))

export const encodeQuery = (params: Parameter[]): string =>
    (params.length !== 0 ? '?' : '') +
        params
            .map((param) => `${encodeURIComponent(param.key)}=${encodeURIComponent(param.value)}`)
            .join('&')
