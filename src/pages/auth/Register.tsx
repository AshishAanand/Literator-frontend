import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { AuthInput } from '../../components/ui/auth-input'
import { AuthButton } from '../../components/ui/auth-button'
import {useAuth} from "../../features/auth/useAuth.ts";
import {useNavigate} from "react-router-dom";

export default function RegisterPage() {
    const navigate = useNavigate();
    const { signup, isAuthenticated } = useAuth();

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        bio: '',
    });

    const [errors, setErrors] = useState<Partial<typeof formData>>({});
    const [isLoading, setIsLoading] = useState(false);

    /* ----------------------------- */
    /* ✅ AUTO NAVIGATION AFTER LOGIN */
    /* ----------------------------- */
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard', { replace: true });
        }
    }, [isAuthenticated, navigate]);

    const handleChange = (field: keyof typeof formData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    const handleSubmit = async () => {
        if (isLoading) return;

        const newErrors: Partial<typeof formData> = {};

        // Validation
        if (!formData.name.trim()) newErrors.name = 'Name is required';

        if (!formData.username.trim()) {
            newErrors.username = 'Username is required';
        } else if (formData.username.length < 3) {
            newErrors.username = 'Username must be at least 3 characters';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!formData.email.includes('@')) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (formData.bio.length > 160) {
            newErrors.bio = 'Bio must be under 160 characters';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            setIsLoading(true);
            setErrors({});

            await signup({
                name: formData.name,
                username: formData.username,
                email: formData.email,
                password: formData.password,
                bio: formData?.bio,
            });

        } catch (err: any) {
            const message =
                err.response?.data?.message || 'Registration failed';
            setErrors({ email: message });
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center space-y-3 mb-12">
                    <Link to="/" className="inline-block">
                        <h1 className="font-serif text-3xl font-light tracking-tight hover:text-primary transition-colors">
                            Literator
                        </h1>
                    </Link>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Create a quiet space for your thoughts.
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-card rounded-xl border border-border/30 p-8 shadow-sm">
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit()
                    }} className="space-y-5">
                        <AuthInput
                            id="name"
                            type="text"
                            label="Full Name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            error={errors.name as string | undefined}
                            autoComplete="name"
                        />

                        <AuthInput
                            id="username"
                            type="text"
                            label="Username"
                            placeholder="Choose a username"
                            value={formData.username}
                            onChange={(e) => handleChange('username', e.target.value)}
                            error={errors.username as string | undefined}
                            autoComplete="username"
                        />

                        <AuthInput
                            id="email"
                            type="email"
                            label="Email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            error={errors.email as string | undefined}
                            autoComplete="email"
                        />

                        <AuthInput
                            id="password"
                            type="password"
                            label="Password"
                            placeholder="Create a password"
                            value={formData.password}
                            onChange={(e) => handleChange('password', e.target.value)}
                            error={errors.password as string | undefined}
                            autoComplete="new-password"
                        />

                        <AuthInput
                            id="confirmPassword"
                            type="password"
                            label="Confirm Password"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={(e) => handleChange('confirmPassword', e.target.value)}
                            error={errors.confirmPassword as string | undefined}
                            autoComplete="new-password"
                        />

                        <div className="space-y-1">
                            <label className="text-sm font-medium text-foreground">
                                Bio <span className="text-muted-foreground">(optional)</span>
                            </label>

                            <textarea
                                value={formData.bio}
                                onChange={(e) => handleChange('bio', e.target.value)}
                                placeholder="A few words about you, your writing, or your interests..."
                                rows={3}
                                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                            />

                            {errors.bio && (
                                <p className="text-xs text-destructive">{errors.bio}</p>
                            )}
                        </div>


                        <AuthButton type="submit" isLoading={isLoading} disabled={isLoading}>
                            Create Account
                        </AuthButton>
                    </form>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-border/30"></div>
                        </div>
                    </div>

                    {/* Login Link */}
                    <p className="text-center text-sm text-muted-foreground">
                        Already have an account?{' '}
                        <Link
                            to="/login"
                            className="text-primary hover:underline font-medium transition-colors"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>

                {/* Footer Note */}
                <p className="text-center text-xs text-muted-foreground mt-8">
                    This is a demo. No data is collected or stored.
                </p>
            </div>
        </div>
    )
}
