'use client'

import * as React from 'react'

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    error?: string
}

const AuthInput = React.forwardRef<HTMLInputElement, AuthInputProps>(
    ({ label, error, className, ...props }, ref) => {
        return (
            <div className="space-y-2">
                <label htmlFor={props.id} className="block text-sm font-medium text-foreground">
                    {label}
                </label>
                <input
                    ref={ref}
                    {...props}
                    className={`w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                        error ? 'border-destructive focus:ring-destructive' : ''
                    } ${className}`}
                />
                {error && <p className="text-sm text-destructive">{error}</p>}
            </div>
        )
    }
)
AuthInput.displayName = 'AuthInput'

export { AuthInput }
