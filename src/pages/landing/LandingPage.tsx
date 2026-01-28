'use client'

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-border/40">
                <nav className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
                    <div className="text-2xl font-serif font-semibold tracking-tight">
                        Literator
                    </div>
                    <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                        Start Writing
                    </button>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="mx-auto max-w-4xl px-6 py-24 md:py-32 text-center space-y-8">
                    {/* Decorative line */}
                    <div className="flex justify-center">
                        <div className="h-px w-12 bg-linear-to-r from-transparent via-muted to-transparent"></div>
                    </div>

                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight">
                        A quiet place to write, think, and collect your work.
                    </h1>

                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
                        Literator is a calm, focused space—not a social network. Write your stories, poems, essays, and research notes without distraction or pressure.
                    </p>

                    <button className="mx-auto px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
                        Create Your Space
                    </button>
                </div>

                {/* Subtle background texture */}
                <div className="absolute inset-0 -z-10 opacity-30">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-40 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
                </div>
            </section>

            {/* Purpose Section */}
            <section className="border-t border-border/40">
                <div className="mx-auto max-w-4xl px-6 py-20 space-y-12">
                    <div className="space-y-8">
                        <h2 className="font-serif text-3xl font-light">Why Literator</h2>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <div className="space-y-3">
                                <h3 className="font-serif text-lg font-medium">Write Without Distraction</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    A clean editor that gets out of your way. No notifications, no timers, no pressure—just you and your thoughts.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h3 className="font-serif text-lg font-medium">Organize Meaningfully</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Collect your work into personal collections. Structure your thoughts the way that makes sense to you.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h3 className="font-serif text-lg font-medium">Keep Everything Personal</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Your work stays private by default. Literator is your personal notebook, not a stage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who It's For */}
            <section className="border-t border-border/40 bg-card/30">
                <div className="mx-auto max-w-4xl px-6 py-20 space-y-12">
                    <div className="space-y-8">
                        <h2 className="font-serif text-3xl font-light">Made for People Like You</h2>

                        <div className="space-y-6">
                            <div className="flex gap-6">
                                <div className="shrink-0 pt-1">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-serif text-lg font-medium mb-2">Writers</h3>
                                    <p className="text-muted-foreground">Crafting stories, novels, and pieces you care about.</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="shrink-0 pt-1">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-serif text-lg font-medium mb-2">Poets</h3>
                                    <p className="text-muted-foreground">Exploring language and emotion through verse.</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="shrink-0 pt-1">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-serif text-lg font-medium mb-2">Students</h3>
                                    <p className="text-muted-foreground">Organizing research, notes, and reflective writing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Feels Section */}
            <section className="border-t border-border/40">
                <div className="mx-auto max-w-4xl px-6 py-20 space-y-12">
                    <div className="space-y-8">
                        <h2 className="font-serif text-3xl font-light">How It Feels</h2>

                        <div className="space-y-8">
                            <div className="space-y-3">
                                <h3 className="font-serif text-lg font-medium">A Quiet Editor</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Open Literator and step into a calm, minimalist workspace. No toolbars fighting for attention. No templates demanding you fit a mold. Just a page ready for your words.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h3 className="font-serif text-lg font-medium">Personal Collections</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Organize your work the way you think. Create collections for different projects, themes, or purposes. Your system is entirely personal.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h3 className="font-serif text-lg font-medium">Thoughtful Organization</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Search, sort, and explore your archive intuitively. When you're ready, revisit your work with clarity and perspective.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing Section */}
            <section className="border-t border-border/40 bg-card/30">
                <div className="mx-auto max-w-3xl px-6 py-24 text-center space-y-8">
                    <div className="space-y-4">
                        <p className="font-serif text-xl leading-relaxed">
                            If you value clarity and quiet thinking, this space is for you.
                        </p>
                        <p className="text-muted-foreground">
                            Literator respects your work and your process. No metrics. No algorithms. Just a place to write.
                        </p>
                    </div>

                    <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity inline-block">
                        Start Free Today
                    </button>

                    <p className="text-sm text-muted-foreground">
                        No credit card required. Your first collection is waiting.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border/40 bg-background">
                <div className="mx-auto max-w-4xl px-6 py-12">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
                        <div className="space-y-2">
                            <p className="font-serif text-sm font-medium">Literator</p>
                            <p className="text-xs text-muted-foreground">A quiet space for meaningful writing.</p>
                        </div>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                About
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                Privacy
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    )
}
