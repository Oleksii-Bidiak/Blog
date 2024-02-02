import { User } from 'entities/User'

export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
}

export interface ArticleBlokBase {
    id: string
    type: ArticleBlockType
}
export interface ArticleImageBlok extends ArticleBlokBase {
    type: ArticleBlockType.IMAGE
    src: string
    title: string
}
export interface ArticleTextBlok extends ArticleBlokBase {
    type: ArticleBlockType.TEXT
    paragraphs: string[]
    title?: string
}
export interface ArticleCodeBlok extends ArticleBlokBase {
    type: ArticleBlockType.CODE
    code: string
}

export type ArticleBlok = ArticleImageBlok | ArticleTextBlok | ArticleCodeBlok

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
}

export enum ArticleView {
    BIG = 'BIG',
    SMALL = 'SMALL',
}

export interface Article {
    id: string
    title: string
    subtitle: string
    img: string
    views: number
    createdAt: string
    user: User
    type: ArticleType[]
    blocks: ArticleBlok[]
}
