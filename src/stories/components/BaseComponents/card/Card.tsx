import React from 'react';
import './card.css';

export interface CardProps {
    title: string;
    description: string;
    date: string;
    image?: string;
    tags?: string[];
}

export const Card: React.FC<CardProps> = ({
    title,
    description,
    date,
    image,
    tags = [],
}) => (
    <article className="card">
        {image && (
            <div className="card-image">
                <img src={image} alt={title} />
            </div>
        )}
        <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <time className="card-date">{date}</time>
            <p className="card-description">{description}</p>
            {tags.length > 0 && (
                <div className="card-tags">
                    {tags.map((tag) => (
                        <span key={tag} className="card-tag">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    </article>
);