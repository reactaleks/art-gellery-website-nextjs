import SocialIconComponent from "./SocialIconComponent";

interface PropTypes {
    dark: boolean;
}

export default function SocialComponent({dark}:PropTypes) {
    return (
        <div className='flex w-[100px] h-[20px] justify-between'>
            <SocialIconComponent iconType="instagram" iconSize="20px" styling={` ${dark ? 'fill-white hover:fill-gold' : 'fill-allmost-black hover:fill-white'}`}/>
            <SocialIconComponent iconType="facebook" iconSize="20px" styling={` ${dark ? 'fill-white hover:fill-gold' : 'fill-allmost-black hover:fill-white'}`}/>
            <SocialIconComponent iconType="twitter" iconSize="20px" styling={` ${dark ? 'fill-white hover:fill-gold' : 'fill-allmost-black hover:fill-white'}`}/>
        </div>
    )
}