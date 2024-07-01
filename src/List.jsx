function List(props){

//  const fruits = [{id :1,name :'banana',calories :120},{id :2,name :'apple',calories :85},{id :3,name :'mango',calories :65},{id :4,name :'berry', calories:50}]
// fruits.sort((a,b) => a.name.localeCompare(b.name));
// fruits.sort((a,b) => b.name.localeCompare(a.name));
// fruits.sort((a,b) => a.calories-b.calories);
// fruits.sort((a,b) => b.calories-a.calories);

const category = props.category
const items = props.items

// const highCal = items.filter((fruit)=> fruit.calories>80);
const mapItems = items.map((item)=> <li key={item.id}>{item.name} : &nbsp; {item.calories}</li>);
return(
    <>
    {/* <ul>
        {mapItems}
    </ul> */}

    <h3>{category}</h3>
    <h3>{items}</h3>
    </>
    )

}
export default List