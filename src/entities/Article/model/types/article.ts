import { User } from '@/entities/User'
import { ArticleBlockType, ArticleType } from '../const/const'

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
