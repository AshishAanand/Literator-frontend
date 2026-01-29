import { Link } from 'react-router-dom'
import { AuthButton } from '../../components/ui/auth-button'
import {useAuth} from "../../features/auth/useAuth.ts";

export default function DashboardPage() {
    // Mock user data
    const {user} = useAuth()

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
        <div className="w-full max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            {/* Welcome Section */}
            <div className="mb-12">
                <h1 className="text-4xl font-serif font-bold text-foreground mb-2">
                    Welcome back, {user?.name}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    A quiet place for your thoughts.
                </p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                <Link to="/dashboard/work" className="block">
                    <AuthButton className="w-full py-6 text-base font-medium bg-primary hover:bg-primary/90">
                        Start Writing
                    </AuthButton>
                </Link>

                {stats.lastDraft && (
                    <button className="p-6 bg-card border border-border rounded-lg text-left hover:border-primary/40 transition-colors group">
                        <p className="text-sm text-muted-foreground mb-1">Continue last draft</p>
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                            {stats.lastDraft.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">{stats.lastDraft.date}</p>
                    </button>
                )}
            </div>

            {/* Light Stats */}
            <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                    <p className="text-4xl font-serif font-bold text-foreground">
                        {stats.totalWritings}
                    </p>
                    <p className="text-sm text-muted-foreground">writings</p>
                </div>
                <div className="space-y-1">
                    <p className="text-4xl font-serif font-bold text-foreground">
                        {stats.collections}
                    </p>
                    <p className="text-sm text-muted-foreground">collections</p>
                </div>
            </div>
        </div>
    )
}
