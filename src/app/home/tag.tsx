export default function Tag (
    props:{
        name: string;
        className: string
    }){
    return (
        <div className={props.className}>
            <p className="text-base font-medium tracking-wider">{props.name}</p>
        </div>
    )
}