import { useState } from 'react'
import {Link} from 'react-router-dom'
import { AuthButton } from '../../components/ui/auth-button'
import { WorkCard } from '../../components/ui/work-card'
import { Plus } from 'lucide-react'

export default function Work() {
    // Mock writings data
    const writings = [
        {
            id: 1,
            title: 'Thoughts on winter mornings',
            excerpt: 'There\'s something about the quiet hours before dawn. The world feels softer, less demanding...',
            lastEdited: 'yesterday at 9:23 PM',
        },
        {
            id: 2,
            title: 'A poem for solitude',
            excerpt: 'In the spaces between words, I find myself. In the silence, I hear the truth...',
            lastEdited: '3 days ago',
        },
        {
            id: 3,
            title: 'Essay on reading deeply',
            excerpt: 'To read deeply is to engage in a kind of meditation. Each word becomes a door...',
            lastEdited: '1 week ago',
        },
    ]

    const [isEmpty] = useState(false)

    return (
        <div className="w-full max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
                    Your Work
                </h1>
                <p className="text-muted-foreground">
                    {writings.length} {writings.length === 1 ? 'piece' : 'pieces'} so far
                </p>
            </div>

            {isEmpty ? (
                // Empty state
                <div className="flex flex-col items-center justify-center py-16 text-center">
                    <p className="text-lg text-muted-foreground mb-6">
                        Your writing space is empty.
                    </p>
                    <p className="text-sm text-muted-foreground mb-8 max-w-sm">
                        Begin your journey with words. Every piece you write is a reflection of your thoughts, your voice, your story.
                    </p>
                    <Link to="/">
                        <AuthButton className="bg-primary hover:bg-primary/90">
                            <Plus className="w-4 h-4 mr-2" />
                            Start your first piece
                        </AuthButton>
                    </Link>
                </div>
            ) : (
                <>
                    {/* Floating Action Button (Top) */}
                    <div className="mb-8 flex justify-end">
                        <Link to="/">
                            <AuthButton
                                className="bg-primary hover:bg-primary/90 rounded-full p-3 h-auto w-auto"
                            >
                                <Plus className="w-6 h-6" />
                            </AuthButton>
                        </Link>
                    </div>

                    {/* Writings List */}
                    <div className="space-y-4">
                        {writings.map((writing) => (
                            <WorkCard
                                key={writing.id}
                                title={writing.title}
                                excerpt={writing.excerpt}
                                lastEdited={writing.lastEdited}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}
