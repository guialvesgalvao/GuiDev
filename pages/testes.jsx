import Logo from '../public/logo-branco.png'
import Image from 'next/image'
export default function Testes () {
    return(
        <div>

                <div className="containerS">
                    <div className="imgcontainerS">
                        <Image src={Logo} alt="asddsa" className='imgS' />
                        <Image src={Logo} alt="asddsa" className='imgS' />
                        <Image src={Logo} alt="asddsa" className='imgS' />
                        <Image src={Logo} alt="asddsa" className='imgS' />
                        <Image src={Logo} alt="asddsa" className='imgS' />
                        <Image src={Logo} alt="asddsa" className='imgS' />
                    </div>
                </div>
            </div>
        
    )
}