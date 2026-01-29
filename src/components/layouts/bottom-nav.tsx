import { Link, useLocation } from "react-router-dom" // Use useLocation instead
import { Home, BookOpen, FolderOpen, User } from 'lucide-react'

const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/work', label: 'Your Work', icon: BookOpen },
    { href: '/collections', label: 'Collections', icon: FolderOpen },
    { href: '/profile', label: 'Profile', icon: User },
]

export function BottomNavigation() {
    // React Router's equivalent to usePathname()
    const { pathname } = useLocation()

    return (
        <nav className="fixed bottom-0 left-0 right-0 border-t border-border bg-card/80 backdrop-blur-sm">
            <div className="flex items-center justify-around">
                {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.href}
                            to={item.href} // Changed 'href' to 'to'
                            className={`flex flex-col items-center justify-center gap-1 px-3 py-4 text-xs font-medium transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
                        >
                            <Icon className="h-6 w-6" />
                            <span className="hidden sm:inline">{item.label}</span>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}
