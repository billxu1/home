import { useState } from 'react'

export const NewsletterSignup = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Add newsletter signup logic here
        console.log('Newsletter signup:', email)
    }

    return (
        <section className="newsletter">
            <h2>Stay Updated</h2>
            <p>Get the latest posts delivered straight to your inbox.</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <button type="submit">Subscribe</button>
            </form>
        </section>
    )
}