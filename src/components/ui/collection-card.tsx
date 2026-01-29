interface CollectionCardProps {
    name: string
    count: number
    className?: string
}

export function CollectionCard({ name, count, className }: CollectionCardProps) {
    return (
        <button
            className={`w-full text-left p-6 bg-card border border-border rounded-lg 
            hover:border-primary/40 hover:bg-card/60 transition-colors group 
            ${className || ''}`}
        >
            <h3 className="text-lg font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {name}
            </h3>
            <p className="text-sm text-muted-foreground">
                {count} {count === 1 ? 'piece' : 'pieces'}
            </p>
        </button>
    )
}
