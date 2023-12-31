import React from 'react'
import BlogItem from '../ui/BlogItem';

const articles = [
    {
        title: "Яка зубна щітка краща - м'яка чи жорстка",
        author: "Доктор Олексій Фігура",
        content: "Один з поширених питань при виборі зубної щітки - це м'яка чи жорстка щітка краща для догляду за зубами? У цій статті ми розглянемо відмінності між м'якими і жорсткими щітками та надамо поради щодо вибору найкращої опції для вашого усмішки."
    },
    {
        title: "Секрети правильної техніки чищення зубів",
        author: "Доктор Максим Яжик",
        content: "Ефективний догляд за зубами включає не лише вибір правильної щітки, але і використання правильної техніки чищення. У цій статті ми розкажемо про секрети правильної техніки чистки зубів, які допоможуть забезпечити оптимальний догляд за вашою усмішкою."
    },
    {
        title: "Вплив правильного догляду за зубами на загальне здоров'я",
        author: "Доктор Олексій Фігура",
        content: "Догляд за зубами не лише забезпечує білосніжну посмішку, але і впливає на загальне здоров'я. У цій статті ми розглянемо, як правильний догляд за зубами може покращити ваше загальне самопочуття і запобігти ряду захворювань."
    },

];

const Blog = () => {
    return (
        <div className='blog-container'>
            <ul>
                {articles.map(item => <BlogItem author={item.author} content={item.content} title={item.title} />)}
            </ul>
        </div>
    )
}

export default Blog