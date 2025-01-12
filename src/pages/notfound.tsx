import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <h1 className='text-8xl font-bold mb-8'>Oops!</h1>
          <p className='text-5xl mb-8'>404 - Page Not Found!</p>
          <Link className='btn btn-primary btn-lg' to='/'>
            <FontAwesomeIcon icon={faHome} size='2xl' />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound