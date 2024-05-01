import { useState } from "react";

function Todo(){
const [list, setList] = useState([
{id:1, item: 'Apple'},
{id:2, item: 'Orange'},
]);

const [newItem, setnewItem] = useState('')

function handleDelete(removeid){
console.log(removeid)
var data = list.filter((item) => {
if(item.id === removeid){
return false
}
else{
return true
}
})
setList(data)
}

function handleChange(event){
setnewItem(event.target.value)
}
function handleAdd(){
setList([...list, {id:list.length+1, item:newItem}])
}
return(
<>
<h1>List</h1>
<input value={newItem} onChange={handleChange}></input>
<button onClick={handleAdd}>Add</button>
<ul>
{
list.map((data)=>{
return(
<li key={data.id}>{data.item} <button onClick={()=>handleDelete(data.id)}>Delete</button></li>
)
})
}

</ul>
</>
)
}

export default Todo;