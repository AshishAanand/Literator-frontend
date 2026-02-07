import { useState } from 'react'
import { AuthButton } from './auth-button'

type CollectionTag =
    | 'POEM'
    | 'STORY'
    | 'ARTICLE'
    | 'ESSAY'
    | 'BLOG'
    | 'NOVEL'
    | 'SCRIPT'
    | 'RESEARCH_PAPER'
    | 'OTHER'

interface CreateCollectionModalProps {
    open: boolean
    onClose: () => void
    onSubmit: (data: {
        title: string
        description?: string
        tag: CollectionTag
        visibility: 'PUBLIC'
    }) => void
}

export function CreateCollectionModal({
                                          open,
                                          onClose,
                                          onSubmit,
                                      }: CreateCollectionModalProps) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [tag, setTag] = useState<CollectionTag>('OTHER')

    if (!open) return null

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        onSubmit({
            title,
            description: description || undefined,
            tag,
            visibility: 'PUBLIC',
        })
    }

    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-end sm:items-center justify-center">
            <div className="w-full sm:max-w-lg bg-card rounded-t-2xl sm:rounded-2xl p-6 border border-border">
                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-xl font-serif font-bold text-foreground">
                        Create collection
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Organize your writing thoughtfully.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Title */}
                    <div>
                        <label className="text-sm font-medium text-foreground">
                            Title
                        </label>
                        <input
                            required
                            maxLength={100}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Winter reflections"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="text-sm font-medium text-foreground">
                            Description
                        </label>
                        <textarea
                            maxLength={500}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Optional short description"
                            rows={3}
                        />
                    </div>

                    {/* Tag */}
                    <div>
                        <label className="text-sm font-medium text-foreground">
                            Type
                        </label>
                        <select
                            value={tag}
                            onChange={(e) => setTag(e.target.value as CollectionTag)}
                            className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                        >
                            {[
                                'POEM',
                                'STORY',
                                'ARTICLE',
                                'ESSAY',
                                'BLOG',
                                'NOVEL',
                                'SCRIPT',
                                'RESEARCH_PAPER',
                                'OTHER',
                            ].map((t) => (
                                <option key={t} value={t}>
                                    {t.replace('_', ' ')}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-sm text-muted-foreground hover:text-foreground"
                        >
                            Cancel
                        </button>

                        <AuthButton type="submit" className="bg-primary">
                            Create
                        </AuthButton>
                    </div>
                </form>
            </div>
        </div>
    )
}
