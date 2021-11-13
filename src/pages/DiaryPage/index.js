import { List } from '@material-ui/core'
import DiaryListItem from '../../components/DiaryListItem'
import DiaryModal from '../../components/DiaryModal'
import Header from '../../components/Header'

const diaries = [
   {
      title: 'Ava Max',
      createdAt: '2/11/2021',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      bgImg: 'https://images.pexels.com/photos/8466699/pexels-photo-8466699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
   },
   {
      title: 'Justin Bieber',
      createdAt: '3/11/2021',
      desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text',
      bgImg: 'https://images.pexels.com/photos/2908852/pexels-photo-2908852.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
   },
   {
      title: 'Alan Walker',
      createdAt: '4/11/2021',
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
      bgImg: 'https://images.pexels.com/photos/8466158/pexels-photo-8466158.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
   }
]

function DiaryPage() {
   return (
      <>
         <Header />
         <List>
            {diaries.map((d, i) => (
               <DiaryListItem
                  key={i}
                  title={d.title}
                  desc={d.desc}
                  bgImg={d.bgImg}
                  createdAt={d.createdAt}
               />
            ))}
         </List>
         <DiaryModal />
      </>
   )
}

export default DiaryPage
