import Provider from '../Provider';

import styles from './index.module.css';

export default function Articles() {
  const data = [
    {
      image_url: '/post3.jpg',
      post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }, {
      image_url: '/post2.jpg',
      post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }, {
      image_url: '/post1.jpg',
      post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },{
      image_url: '/post3.jpg',
      post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },{
      image_url: '/post3.jpg',
      post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];

  const Article = ({ image_url, post_content }) => {
    return (
      <div className={styles.article}>
        <div className={styles.image}>
          <img
            src={image_url}
            alt="post_thumbnail"
          />
        </div>
        <div className={styles.textPreview}>
          <p>{post_content}</p>
        </div>
        <div className={styles.action}>
          <a href="/">Saiba mais</a>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.background}>
      <Provider>
        <div className={styles.articles}>
          {data.map((post, index) => (
            <Article
              key={index}
              image_url={post.image_url}
              post_content={post.post_content}
            />
          ))}
        </div>
      </Provider>
    </div>
  )
}
