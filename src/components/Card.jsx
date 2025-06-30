const Card=({props, onDelete})=>{

    return(
    <>
    <div className='card' key={props.id}>
    <p>{props.text}</p>
    <button onClick={(event)=>onDelete(props.id)}> DELETE </button>
    </div>
    </>
    )
}
export default Card