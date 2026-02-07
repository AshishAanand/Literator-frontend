interface CollectionCardProps {
    title: string
    description?: string | null
    tag: string
    count: number
    className?: string
}


export function CollectionCard({
                                   title,
                                   description,
                                   tag,
                                   count,
                                   className,
                               }: CollectionCardProps) {
    return (
        <button
            className={`w-full text-left p-6 bg-card border border-border rounded-xl
      hover:border-primary/40 hover:bg-card/60 transition-all group
      ${className || ''}`}
        >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-lg font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                    {title}
                </h3>

                {/* Tag */}
                <span className="text-xs uppercase tracking-wide px-2 py-1 rounded-full
          bg-muted text-muted-foreground">
          {tag.replace('_', ' ')}
        </span>
            </div>

            {/* Description */}
            {description && (
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                    {description}
                </p>
            )}

            {/* Footer */}
            <p className="text-xs text-muted-foreground">
                {count} {count === 1 ? 'item' : 'items'}
            </p>
        </button>
    )
}

