import { services } from '../../data'
import Title from '../Title'
import Service from './Service'
import "./Service.css"
const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='Courses' />

      <div className='section-center services-center'>
        {services.map((service) => {
          return <Service {...service} key={service.id} />
        })}
      </div>
    </section>
  )
}
export default Services
