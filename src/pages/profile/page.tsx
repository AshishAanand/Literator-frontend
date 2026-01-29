import React from "react"


import { useState } from 'react'
import { LogOut, Edit2 } from 'lucide-react'

export default function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false)
    const [profile, setProfile] = useState({
        name: 'Sarah Chen',
        email: 'sarah@example.com',
        bio: 'A writer exploring the quiet spaces between words.',
    })

    const [formData, setFormData] = useState(profile)

    const handleSave = () => {
        setProfile(formData)
        setIsEditing(false)
    }

    const handleCancel = () => {
        setFormData(profile)
        setIsEditing(false)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    return (
        <div className="w-full max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
                    Profile
                </h1>
                <p className="text-muted-foreground">
                    Your personal information
                </p>
            </div>

            {/* Profile Card */}
            <div className="bg-card border border-border rounded-lg p-8 mb-8">
                {/* Avatar */}
                <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
            <span className="text-2xl font-serif font-bold text-secondary-foreground">
              {profile.name.charAt(0)}
            </span>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-serif font-bold text-foreground">
                            {profile.name}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            {profile.email}
                        </p>
                    </div>
                </div>

                {/* Profile Details */}
                {!isEditing ? (
                    <>
                        <div className="space-y-6 mb-8">
                            <div>
                                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                                    Name
                                </label>
                                <p className="text-foreground mt-1">
                                    {profile.name}
                                </p>
                            </div>
                            <div>
                                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                                    Email
                                </label>
                                <p className="text-foreground mt-1">
                                    {profile.email}
                                </p>
                            </div>
                            {profile.bio && (
                                <div>
                                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                                        Bio
                                    </label>
                                    <p className="text-foreground mt-1 leading-relaxed">
                                        {profile.bio}
                                    </p>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={() => setIsEditing(true)}
                            className="w-full px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors flex items-center justify-center gap-2 mb-4"
                        >
                            <Edit2 className="w-4 h-4" />
                            Edit Profile
                        </button>
                    </>
                ) : (
                    <>
                        <div className="space-y-4 mb-6">
                            <div>
                                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide block mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide block mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide block mb-2">
                                    Bio
                                </label>
                                <textarea
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    rows={3}
                                    placeholder="Tell us a bit about yourself..."
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                />
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={handleSave}
                                className="flex-1 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors"
                            >
                                Save Changes
                            </button>
                            <button
                                onClick={handleCancel}
                                className="flex-1 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
                            >
                                Cancel
                            </button>
                        </div>
                    </>
                )}
            </div>

            {/* Logout */}
            <button className="w-full px-4 py-3 border border-destructive text-destructive rounded-lg hover:bg-destructive/5 transition-colors flex items-center justify-center gap-2 font-medium">
                <LogOut className="w-4 h-4" />
                Logout
            </button>
        </div>
    )
}
