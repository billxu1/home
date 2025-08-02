import { Card } from '../../stories/components/BaseComponents/card/Card'

const recentPosts = [
    {
        title: 'Understanding React Hooks',
        description: 'Deep dive into React Hooks and their use cases.',
        date: '2024-02-03',
        tags: ['React', 'Hooks', 'Tutorial']
    },
    {
        title: 'CSS Grid Layout Guide',
        description: 'Master CSS Grid for modern web layouts.',
        date: '2024-02-04',
        tags: ['CSS', 'Web Design', 'Layout']
    }
]

export const RecentPosts = () => (
    <section className="recent-posts">
        <h2>Recent Posts</h2>
        <div className="posts-list">
            {recentPosts.map(post => (
                <Card key={post.title} {...post} />
            ))}
        </div>
    </section>
)