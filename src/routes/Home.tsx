import { Card } from '../stories/components/BaseComponents/card/Card'

const featuredPost = {
    title: 'Getting Started with React',
    description: 'Learn the basics of React and how to build your first component.',
    date: '2024-02-01',
    image: '/blog-image.jpg',
    tags: ['React', 'JavaScript', 'Tutorial']
}

export const Component = () => {
    return (
        <section className="featured-post">
            <h2>Featured Post</h2>
            <Card {...featuredPost} />
        </section>
    )
}