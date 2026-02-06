// import {useState} from 'react'
// import { LogOut, Edit2, Check, X } from 'lucide-react'
// import {useAuth} from "../../features/auth/useAuth.ts";
//
// export default function ProfilePage() {
//     const [isEditing, setIsEditing] = useState(false)
//     const [profile, setProfile] = useState({
//         name: 'Sarah Chen',
//         email: 'sarah@example.com',
//         bio: 'A writer exploring the quiet spaces between words.',
//     })
//
//     const [formData, setFormData] = useState(profile);
//     const { logout } = useAuth();
//
//     const handleSave = () => {
//         setProfile(formData)
//         setIsEditing(false)
//     }
//
//     const handleCancel = () => {
//         setFormData(profile)
//         setIsEditing(false)
//     }
//
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target
//         setFormData(prev => ({
//             ...prev,
//             [name]: value,
//         }))
//     }
//
//     return (
//         <div className="min-h-screen bg-background px-4 py-12 sm:px-6 lg:px-8">
//             <div className="mx-auto w-full max-w-lg">
//                 {/* Header */}
//                 <div className="mb-12 text-center">
//                     <h1 className="text-4xl font-serif font-bold text-foreground mb-2">
//                         Profile
//                     </h1>
//                     <p className="text-sm text-muted-foreground">
//                         Your personal information
//                     </p>
//                 </div>
//
//                 {/* Profile Card */}
//                 <div className="bg-card border border-border rounded-xl p-8 mb-8 shadow-sm">
//                     {!isEditing ? (
//                         <>
//                             {/* Avatar & Header */}
//                             <div className="flex flex-col items-center mb-8 pb-8 border-b border-border">
//                                 <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-4">
//                   <span className="text-3xl font-serif font-bold text-secondary-foreground">
//                     {profile.name.charAt(0)}
//                   </span>
//                                 </div>
//                                 <h2 className="text-2xl font-serif font-bold text-foreground text-center">
//                                     {profile.name}
//                                 </h2>
//                                 <p className="text-sm text-muted-foreground mt-1">
//                                     {profile.email}
//                                 </p>
//                             </div>
//
//                             {/* Profile Details */}
//                             <div className="space-y-7 mb-8">
//                                 <div>
//                                     <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-3">
//                                         Name
//                                     </label>
//                                     <p className="text-base text-foreground font-medium">
//                                         {profile.name}
//                                     </p>
//                                 </div>
//                                 <div>
//                                     <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-3">
//                                         Email
//                                     </label>
//                                     <p className="text-base text-foreground font-medium">
//                                         {profile.email}
//                                     </p>
//                                 </div>
//                                 {profile.bio && (
//                                     <div>
//                                         <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-3">
//                                             Bio
//                                         </label>
//                                         <p className="text-base text-foreground leading-relaxed">
//                                             {profile.bio}
//                                         </p>
//                                     </div>
//                                 )}
//                             </div>
//
//                             {/* Edit Button */}
//                             <button
//                                 onClick={() => setIsEditing(true)}
//                                 className="w-full px-4 py-3 border border-border rounded-lg text-foreground hover:bg-muted transition-colors flex items-center justify-center gap-2 font-medium text-sm"
//                             >
//                                 <Edit2 className="w-4 h-4" />
//                                 Edit Profile
//                             </button>
//                         </>
//                     ) : (
//                         <>
//                             {/* Edit Form */}
//                             <div className="space-y-6 mb-8">
//                                 <div>
//                                     <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-2">
//                                         Name
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="name"
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                         className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-2">
//                                         Email
//                                     </label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-2">
//                                         Bio
//                                     </label>
//                                     <textarea
//                                         name="bio"
//                                         value={formData.bio}
//                                         onChange={handleChange}
//                                         rows={4}
//                                         placeholder="Tell us a bit about yourself..."
//                                         className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
//                                     />
//                                 </div>
//                             </div>
//
//                             {/* Action Buttons */}
//                             <div className="flex gap-3">
//                                 <button
//                                     onClick={handleSave}
//                                     className="flex-1 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm"
//                                 >
//                                     <Check className="w-4 h-4" />
//                                     Save Changes
//                                 </button>
//                                 <button
//                                     onClick={handleCancel}
//                                     className="flex-1 py-3 border border-border text-foreground hover:bg-muted rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm"
//                                 >
//                                     <X className="w-4 h-4" />
//                                     Cancel
//                                 </button>
//                             </div>
//                         </>
//                     )}
//                 </div>
//
//                 {/* Logout Section */}
//                 <button onClick={logout} className="w-full px-4 py-3 border border-border text-destructive rounded-lg hover:bg-destructive/5 transition-colors flex items-center justify-center gap-2 font-medium text-sm">
//                     <LogOut className="w-4 h-4" />
//                     Logout
//                 </button>
//             </div>
//         </div>
//     )
// }



import { useEffect, useState } from 'react'
import { LogOut, Edit2, Check, X } from 'lucide-react'
import { useAuth } from '../../features/auth/useAuth'
import { instance as axios } from '../../lib/axios.ts'

export default function ProfilePage() {
    const { user, setUser, logout, isLoading } = useAuth()
    const [isEditing, setIsEditing] = useState(false)
    const [isSaving, setIsSaving] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        bio: '',
    })


    // Sync local form state when auth user changes
    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                username: user.username,
                email: user.email,
                bio: user.bio ?? '',
            })
        }
    }, [user])

    if (!user) {
        return <div className="min-h-screen flex items-center justify-center text-muted-foreground">
            Not authenticated
        </div> // or a skeleton loader
    }

    if (isLoading) {
        return <div className="min-h-screen flex items-center justify-center text-muted-foreground">
            Loading profile…
        </div>
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSave = async () => {
        try {
            setIsSaving(true)

            const res = await axios.patch('user/me', {
                name: formData.name,
                bio: formData.bio,
            })

            // 🔥 Update global auth state
            setUser(res.data)

            setIsEditing(false)
        } catch (err) {
            console.error('Failed to update profile', err)
        } finally {
            setIsSaving(false)
        }
    }

    const handleCancel = () => {
        setFormData({
            name: user.name,
            username: user.username,
            email: user.email,
            bio: user.bio ?? '',
        })
        setIsEditing(false)
    }

    const initial = user?.name?.[0] ?? '?'

    return (
        <div className="min-h-screen bg-background px-4 py-12">
            <div className="mx-auto w-full max-w-lg">

                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-serif font-bold">Profile</h1>
                    <p className="text-sm text-muted-foreground">
                        Your personal information
                    </p>
                </div>

                {/* Profile Card */}
                <div className="bg-card border rounded-xl p-8 mb-8">

                    {!isEditing ? (
                        <>
                            {/* Avatar */}
                            <div className="flex flex-col items-center mb-8 pb-8 border-b">
                                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-4">
                                    <span className="text-3xl font-serif font-bold">
                                        {initial}
                                    </span>
                                </div>

                                <h2 className="text-2xl font-serif font-bold">
                                    {user?.name || "—"}
                                </h2>

                                <h2 className="text-2xl font-serif font-bold text-gray-600">
                                    @{user?.username || "username"}
                                </h2>

                                <p className="text-sm text-muted-foreground">
                                    {user.email}
                                </p>
                            </div>

                            {/* Details */}
                            <div className="space-y-6 mb-8">
                                <ProfileField label="Name" value={user.name} />
                                <ProfileField label="Email" value={user.email} />
                                {user.bio && (
                                    <ProfileField label="Bio" value={user.bio} />
                                )}
                            </div>

                            <button
                                onClick={() => setIsEditing(true)}
                                className="w-full border rounded-lg py-3 flex justify-center gap-2"
                            >
                                <Edit2 className="w-4 h-4" />
                                Edit Profile
                            </button>
                        </>
                    ) : (
                        <>
                            {/* Edit form */}
                            <div className="space-y-6 mb-8">
                                <Input label="Name" name="name" value={formData.name} onChange={handleChange} />
                                <Input label="Email" name="email" value={formData.email} disabled />
                                <Textarea label="Bio" name="bio" value={formData.bio} onChange={handleChange} />
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={handleSave}
                                    disabled={isSaving}
                                    className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg"
                                >
                                    <Check className="w-4 h-4 inline mr-2" />
                                    Save
                                </button>
                                <button
                                    onClick={handleCancel}
                                    className="flex-1 border py-3 rounded-lg"
                                >
                                    <X className="w-4 h-4 inline mr-2" />
                                    Cancel
                                </button>
                            </div>
                        </>
                    )}
                </div>

                {/* Logout */}
                <button
                    onClick={logout}
                    className="w-full border text-destructive py-3 rounded-lg flex justify-center gap-2"
                >
                    <LogOut className="w-4 h-4" />
                    Logout
                </button>
            </div>
        </div>
    )
}

function ProfileField({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <label className="text-xs uppercase text-muted-foreground block mb-2">
                {label}
            </label>
            <p className="text-base">{value}</p>
        </div>
    )
}

function Input(props: any) {
    return (
        <div>
            <label className="text-xs uppercase text-muted-foreground block mb-2">
                {props.label}
            </label>
            <input {...props} className="w-full border rounded-lg px-4 py-2.5" />
        </div>
    )
}

function Textarea(props: any) {
    return (
        <div>
            <label className="text-xs uppercase text-muted-foreground block mb-2">
                {props.label}
            </label>
            <textarea {...props} rows={4} className="w-full border rounded-lg px-4 py-2.5 resize-none" />
        </div>
    )
}
