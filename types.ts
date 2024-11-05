export type menuItem = {
    name: string,
    link: string
    subMenu?: subMenuItem[],
}

export type subMenuItem = {
    name: string,
    link: string,
}