import logoLight from '../public/logo-light.svg'
import logoDark from '../public/logo-dark.svg'
import Image from 'next/image'

interface PropType {
    dark: boolean;
}

export default function LogoComponent({dark}:PropType) {
    return (
        <Image src={dark ? logoLight : logoDark} height={40} width={110.05} alt='Modern Art Gallery Logo'/>
    )
}