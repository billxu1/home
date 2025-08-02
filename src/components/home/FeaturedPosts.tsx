import { Card } from '../../stories/components/BaseComponents/card/Card'
import './styles/FeaturedPosts.scss'

const featuredPosts = [
    {
        title: 'Getting Started with React',
        description: 'Learn the basics of React and how to build your first component.',
        date: '2024-02-01',
        image: '/images/blog/getting-started-react.svg',
        tags: ['React', 'JavaScript', 'Tutorial']
    },
    {
        title: 'TypeScript Best Practices',
        description: 'Essential TypeScript patterns for better code quality.',
        date: '2024-02-02',
        image: '/images/blog/typescript-practices.svg',
        tags: ['TypeScript', 'JavaScript', 'Best Practices']
    }
]

export const FeaturedPosts = () => (
    <section className="featured-posts">
        <h2>Featured Posts</h2>
        <div className="posts-grid">
            {featuredPosts.map(post => (
                <Card key={post.title} {...post} />
            ))}
        </div>
    </section>
)