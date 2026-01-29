interface WorkCardProps {
    title: string
    excerpt: string
    lastEdited: string
    className?: string
}

export function WorkCard({ title, excerpt, lastEdited, className }: WorkCardProps) {
    return (
        <button
            className={`w-full text-left p-6 bg-card border border-border rounded-lg hover:border-primary/40 hover:bg-card/60 transition-colors group ${className || ''}`}
        >
            <h3 className="text-lg font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                {excerpt}
            </p>
            <p className="text-xs text-muted-foreground">
                Last edited {lastEdited}
            </p>
        </button>
    )
}
