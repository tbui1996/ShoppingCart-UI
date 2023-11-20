import { atom } from "recoil";


export const titleSearch = atom({
    key: 'titleState',
    default: ' ',
})

export const authorSearch = atom({
    key: 'authorState',
    default: ' ',
})

export const genreSearch = atom({
    key: 'genreState',
    default: ' ',
})