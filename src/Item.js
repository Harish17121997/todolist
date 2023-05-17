import './Item.css'
let Item=(props)=>{
    let data=props.data
    return(<div className="con">
        <div>{data.id}</div>
        <div>{data.todo}</div>
        <div>{""+data.completed}</div>
        <div>{data.userId}</div>
    </div>)
}
export default Item