/// <reference types="vite/client" />

type MarkeeFile = {
    id: string
    name: string
    content: string
    active: boolean
    status: 'editing' | 'saving' | 'saved'
}