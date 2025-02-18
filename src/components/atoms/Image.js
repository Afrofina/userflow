import Image from 'next/image'
const ImageAtom = ({ src, alt ,width,height,className,onClick}) => {
    return <Image src={src} alt={alt} width={width} height={height} className={className} onClick={onClick} priority/>;
};
ImageAtom.defaultProps={
    width:30,
    height:30
}
export default ImageAtom;