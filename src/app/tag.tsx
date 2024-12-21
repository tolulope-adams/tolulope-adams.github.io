
import "./tag.css";



export default function Tag(
    props: {
        name:string,
        className?:string
    }){
    return (
        <div className={`${props.className} glowing-div`}>
            <p className="text-base font-medium tracking-wider">{props.name}</p>
        </div>
    )
}