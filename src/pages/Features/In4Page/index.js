import { Avatar, Box, Typography } from '@material-ui/core'
import Header from '../../../components/Header'
import useStyles from './styles'
import Time from './Time'

function In4Page() {
   const styles = useStyles()

   return (
      <>
         <Header />
         <div className={styles.aboutMePage}>
            <Box className={styles.top}>
               <Box className={styles.topLeft}>
                  <Box className={styles.avatarWrap}>
                     <Avatar
                        alt='Nguyen Anh Khoa'
                        src='/images/nak.jpg'
                        className={styles.avatar}
                     />
                  </Box>
                  <Box className={styles.descWrap}>
                     <Typography className={styles.name}>Nguyen Anh Khoa</Typography>
                     <Typography className={styles.timeAndAdr}>
                        <i className='fas fa-map-marker-alt' style={{ marginRight: 4 }} />
                        Vinh Long, Vietnam – <Time /> – local time
                     </Typography>
                  </Box>
               </Box>
               <Box className={styles.topRight}>
                  <Box>
                     <span className={styles.upWork}>Upwork:</span>
                     <a
                        className={styles.link}
                        href='https://www.upwork.com/freelancers/~01d34f5041e862cc16'
                        target='_blank'
                        rel='noreferrer'
                     >
                        upwork.com
                     </a>
                  </Box>
                  <Box>
                     <span className={styles.freelancer}>Freelancer:</span>
                     <a
                        className={styles.link}
                        href='https://www.freelancer.com/u/PiPix5'
                        target='_blank'
                        rel='noreferrer'
                     >
                        freelancer.com
                     </a>
                  </Box>
               </Box>
            </Box>

            <Box className={styles.body}>
               <Typography className={styles.first}>Full Stack Development</Typography>
               <Box className={styles.second}>
                  <p>
                     Hello, <br />I am a Full Stack Developer with expertise in Node.js, React.js,
                     Express.js, and Font-End Development with over 2 years of experience on top
                     Frameworks in the world. I am committed to providing appropriate, professional,
                     and timely updated solutions to you with the most enthusiasm and
                     professionalism possible. My skills include a variety of business aspects,
                     ensuring the necessary needs for your satisfaction and both your customers.
                  </p>
               </Box>
               <Box className={styles.third}>
                  <p>I have experience in reliable development technologies:</p>
                  <p>✅ React 17x, 16x, React-Router, Redux-Saga, Redux Thunk</p>
                  <p>✅ WordPress</p>
                  <p>✅ CRM, Booking, Podcast</p>
                  <p>✅ Theme Development (Material UI, Flat UI, Metro UI)</p>
                  <p>✅ PSD to HTML / Bootstrap / WordPress</p>
                  <p>✅ Responsive Web Design, SEO, Page Speed ​​Optimization</p>
                  <p>✅ Git (Github, Bitbucket, GitLab)</p>
                  <p>✅ Web Servers (Epxress.js, Node.js, MongoDB, Template Engine)</p>
                  <p>✅ Deployment (Heroku, DigitalOcean, Amazon Web Services)</p>
               </Box>
               <Box className={styles.forth}>
                  Front-End Skills:
                  <p>✅ React.js, Bootstrap, JavaScript, CSS Preprocessor(SCSS, SASS)</p>
                  <p>✅ Material Design, Flat Design, Metro Design</p>
                  <p>✅ Responsive Web Design.</p>
                  <p>✅ Adobe Photoshop, Illustrator</p>
               </Box>
               <Box className={styles.fifth}>
                  <p>I Implement Web Applications and Restful Apis Using Node.js & Express.js</p>
                  <p>
                     I Comprise The Delivering Unique and Web 2.0 Design Solutions Including Both
                     Custom Web Design and CMS Design Services. My Design Solutions are Compliant
                     with W3C Standards.
                  </p>
                  <p>
                     I am happy to improve your customer's business with top website development
                     services
                  </p>
               </Box>
            </Box>

            <Box className={styles.contact}>
               <Box className={styles.bottomLeft}>
                  <p className={styles.contactBasic}>
                     <span className={styles.email}>Email</span>: diwas118151@gmail.com
                  </p>
                  <p className={styles.contactBasic}>
                     <span className={styles.phone}>Phone</span>: +84 899 320 427
                  </p>
                  <p className={styles.contactBasic}>
                     <span className={styles.adr}>Address</span>: 902 Street, My Chanh - Chanh An -
                     Mang Thit - Vinh Long
                  </p>
               </Box>
               <Box className={styles.bottomRight}>
                  <Box>
                     <a href='https://www.facebook.com/pipix5' target='_blank' rel='noreferrer'>
                        <Avatar
                           alt='Facebook'
                           src='https://bom.so/vrFvFm'
                           className={styles.socialImg}
                        />
                     </a>
                  </Box>
                  <Box>
                     <a
                        href='https://www.youtube.com/channel/UCmgkzDkx8EirOSBLLVm8B4Q'
                        target='_blank'
                        rel='noreferrer'
                     >
                        <Avatar
                           alt='Youtube'
                           src='https://bom.so/OJ05WZ'
                           className={styles.socialImg}
                        />
                     </a>
                  </Box>
                  <Box>
                     <a
                        href='https://www.instagram.com/diwas118151'
                        target='_blank'
                        rel='noreferrer'
                     >
                        <Avatar
                           alt='Instargram'
                           src='https://bom.so/YXYvA8'
                           className={styles.socialImg}
                        />
                     </a>
                  </Box>
               </Box>
            </Box>
         </div>
      </>
   )
}

export default In4Page
