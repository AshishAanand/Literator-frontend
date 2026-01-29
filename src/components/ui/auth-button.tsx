'use client'

import * as React from 'react'

interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    isLoading?: boolean
}

const AuthButton = React.forwardRef<HTMLButtonElement, AuthButtonProps>(
    ({ children, isLoading, disabled, className, ...props }, ref) => {
        return (
            <button
                ref={ref}
                disabled={disabled || isLoading}
                {...props}
                className={`w-full py-3 px-4 rounded-lg bg-primary text-primary-foreground font-medium transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${className}`}
            >
                {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></span>
            Loading...
          </span>
                ) : (
                    children
                )}
            </button>
        )
    }
)
AuthButton.displayName = 'AuthButton'

export { AuthButton }
