import { lessons } from '../../data'
import Title from '../Title'
import Tour from './Tour'
import  "./Tour.css"
const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='featured' subTitle='lessons' />

      <div className='section-center featured-center'>
        {lessons.map((tour) => {
          return <Tour {...tour} key={tour.id} />
        })}
      </div>
    </section>
  )
}
export default Tours
