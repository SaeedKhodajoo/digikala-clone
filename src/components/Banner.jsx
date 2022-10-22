import bannerImage from '../assets/images/banner.jpg'
import Offer from './Offer'

function Banner() {
  return (
    <div className='relative'>
        <img src={bannerImage} alt="discount" className='w-full h-72 object-cover' />
        <Offer />
    </div>
  )
}

export default Banner