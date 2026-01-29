import { useState } from 'react'
import { AuthButton } from '../../components/ui/auth-button'
import { CollectionCard } from '../../components/ui/collection-card'
import { Plus } from 'lucide-react'

export default function CollectionsPage() {
    // Mock collections data
    const collections = [
        {
            id: 1,
            name: 'Winter reflections',
            count: 4,
        },
        {
            id: 2,
            name: 'Poetry collection',
            count: 8,
        },
        {
            id: 3,
            name: 'Essays and musings',
            count: 2,
        },
    ]

    const [isEmpty] = useState(false)

    return (
        <div className="w-full max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
                    Collections
                </h1>
                <p className="text-muted-foreground">
                    Organize your work into meaningful collections
                </p>
            </div>

            {isEmpty ? (
                // Empty state
                <div className="flex flex-col items-center justify-center py-16 text-center">
                    <p className="text-lg text-muted-foreground mb-6">
                        Create your first collection.
                    </p>
                    <p className="text-sm text-muted-foreground mb-8 max-w-sm">
                        Collections help you organize your writing by theme, season, or any meaningful grouping that resonates with you.
                    </p>
                    <AuthButton className="bg-primary hover:bg-primary/90">
                        <Plus className="w-4 h-4 mr-2" />
                        Create collection
                    </AuthButton>
                </div>
            ) : (
                <>
                    {/* Floating Action Button */}
                    <div className="mb-8 flex justify-end">
                        <AuthButton
                            className="bg-primary hover:bg-primary/90 rounded-full p-3 h-auto w-auto"
                        >
                            <Plus className="w-6 h-6" />
                        </AuthButton>
                    </div>

                    {/* Collections List */}
                    <div className="space-y-4">
                        {collections.map((collection) => (
                            <CollectionCard
                                key={collection.id}
                                name={collection.name}
                                count={collection.count}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}
