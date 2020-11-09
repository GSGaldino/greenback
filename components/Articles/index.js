import styles from './index.module.css';

export default function Articles(){
  const data = [
    {
      image_url: 'https://s3-alpha-sig.figma.com/img/5dd0/8f07/00944d6b86baaeb7e09e03ee0daf9dd1?Expires=1605484800&Signature=J3fR9qauCf4WnVeF4jDPnWFobjMdub3FSz2IJ9lgmcg56UZPUTwV5XI6PCKGBKte86ujFW4dmVckcn7sYfVzoo0dgXirCUKAaiMdUu5QY-EAVZcu-NI-RYqPd5OI7Byqyh8TkOO~Cr6vIR-~dcapvtBTFMGggFidxEDtiulMrVdtiDb5h0Edf13e--gJ-SCFFSoWr10c90~daTIwFnLVTVq1V7C9E69qMqmP-NhF8G1XYJhp1~JlfXUAkrTkBxdEz3vVpfIjfddGnKEUN7jpwBH78zhPXkIuoMRtqCkSN~CMBijDTPdldVl-8NlGOSE~8b3cj5I-eI9NwYa3esyweA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },{
      image_url: 'https://s3-alpha-sig.figma.com/img/5dd0/8f07/00944d6b86baaeb7e09e03ee0daf9dd1?Expires=1605484800&Signature=J3fR9qauCf4WnVeF4jDPnWFobjMdub3FSz2IJ9lgmcg56UZPUTwV5XI6PCKGBKte86ujFW4dmVckcn7sYfVzoo0dgXirCUKAaiMdUu5QY-EAVZcu-NI-RYqPd5OI7Byqyh8TkOO~Cr6vIR-~dcapvtBTFMGggFidxEDtiulMrVdtiDb5h0Edf13e--gJ-SCFFSoWr10c90~daTIwFnLVTVq1V7C9E69qMqmP-NhF8G1XYJhp1~JlfXUAkrTkBxdEz3vVpfIjfddGnKEUN7jpwBH78zhPXkIuoMRtqCkSN~CMBijDTPdldVl-8NlGOSE~8b3cj5I-eI9NwYa3esyweA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },{
      image_url: 'https://s3-alpha-sig.figma.com/img/905c/cf4a/4e77f2028b15f1f69f54a87f05a96084?Expires=1605484800&Signature=SL8w1JJyJi5OrnjlfWXy48oDdbDzagxG4MyhWSZEt~uyoEbpd8etXVZ-Vz9M9-mREsJHwlR5dT3Ea18gEDG~cgPTS2D0bWzbjkSX3J5NABmnbKsVvXLVpRoOsX9kOdsDiRdkD29W6usL8j3nel6VSaHpPhSOIQcnMU235amcc95U7SEyUpa9OofApBY5fAGnCGv4vrXz4oZeB~P8sCKBX4wH8SX-esYydZFJbmNS9uB09trL46j2vp9zhChzEVU~9CwwkmPQNsMb-AHNqQw4087WHudM2dVlkt9FSMtlGopZAJKsM3E~vaQ7z7~jeHKEi~C5vlr5o2gi6eWcQwwyEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];

  const Article = ({image_url, post_content}) => {
    return (
      <div className={styles.article}>
        <div className={styles.division}>
          <div className={styles.image}>
            <img 
              src={image_url}
              alt="post_thumbnail"
            />
          </div>
          <div className={styles.textPreview}>
            <p>{post_content}</p>
          </div>
        </div>
        <div className={styles.action}>
          <a href="/">Saiba mais</a>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.articles}>
      {data.map((post, index) => (
        <Article
          key={index}
          image_url={post.image_url}
          post_content={post.post_content}
        />
      ))}
    </div>
  )
}
