import { useParams } from 'react-router-dom'
import { Card } from '../stories/components/BaseComponents/card/Card'

const blogPosts = {
    'getting-started-with-react': {
        title: 'Getting Started with React',
        description: 'Learn the basics of React and how to build your first component.',
        date: '2024-02-01',
        image: '/blog-image.jpg',
        tags: ['React', 'JavaScript', 'Tutorial']
    }
}

export default function BlogPost() {
    const { slug } = useParams()
    const post = slug ? blogPosts[slug] : null

    if (!post) {
        return <div>Post not found</div>
    }

    return <Card {...post} />
}