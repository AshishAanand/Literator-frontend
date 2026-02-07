import { Link } from 'react-router-dom';

export default function DashboardPage() {
    // Mock user data
    const user = {
        name: 'Sarah',
    }

    // Mock stats
    const stats = {
        totalWritings: 12,
        collections: 3,
        lastDraft: {
            title: 'Thoughts on winter mornings',
            date: 'Yesterday at 9:23 PM',
        },
    }

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12 sm:py-16">
            <div className="w-full max-w-2xl">
                {/* Welcome Section */}
                <div className="mb-16 sm:mb-20">
                    <h1 className="text-5xl sm:text-6xl font-serif font-bold text-foreground mb-3 text-balance">
                        Welcome back, {user.name}
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        A quiet place for your thoughts.
                    </p>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 sm:mb-20">
                    <Link to="/dashboard/work" className="block">
                        <button className="w-full py-7 px-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium text-base transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                            Start Writing
                        </button>
                    </Link>

                    {stats.lastDraft && (
                        <button className="p-6 bg-card border border-border rounded-lg text-left hover:border-primary/50 transition-all focus:outline-none focus:ring-2 focus:ring-primary group">
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                                Continue last draft
                            </p>
                            <p className="text-foreground font-medium text-base group-hover:text-primary transition-colors mb-2">
                                {stats.lastDraft.title}
                            </p>
                            <p className="text-xs text-muted-foreground">
                                {stats.lastDraft.date}
                            </p>
                        </button>
                    )}
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 gap-8 sm:gap-12">
                    <div>
                        <p className="text-5xl sm:text-6xl font-serif font-bold text-foreground mb-2">
                            {stats.totalWritings}
                        </p>
                        <p className="text-sm text-muted-foreground font-medium">
                            writings
                        </p>
                    </div>
                    <div>
                        <p className="text-5xl sm:text-6xl font-serif font-bold text-foreground mb-2">
                            {stats.collections}
                        </p>
                        <p className="text-sm text-muted-foreground font-medium">
                            collections
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
