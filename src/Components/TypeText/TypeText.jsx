import { Typewriter } from 'react-simple-typewriter'
import './TypeText.scss'
const TypeText = () =>{

    return (
        <div className='typing'>
        <h6 style={{ paddingTop: '2rem', margin: 'auto 0', fontWeight: 'normal' }}>
          {' '}
          <span style={{ color: 'black' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={['We make sure that our recipes are checked by scientists and that everything we cook is up to standards.','Also everything we cook is with you in mind!']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
    
            />
          </span>
        </h6>
      </div>
    );
}
export default TypeText;