import SocialIconComponent from "./SocialIconComponent";

interface PropTypes {
    dark: boolean;
}

export default function SocialComponent({dark}:PropTypes) {
    return (
        <div className='flex w-[100px] h-[20px] justify-between'>
            <SocialIconComponent iconType="instagram" iconSize="20px" styling={`${dark ? 'fill-white' : 'fill-allmost-black'}`}/>
            <SocialIconComponent iconType="facebook" iconSize="20px" styling={`${dark ? 'fill-white' : 'fill-allmost-black'}`}/>
            <SocialIconComponent iconType="twitter" iconSize="20px" styling={`${dark ? 'fill-white' : 'fill-allmost-black'}`}/>
        </div>
    )
}