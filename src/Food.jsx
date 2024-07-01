function Food(){
    const food = "Kiwi"
    const food2 = "Chikku"
    return(
        <ul>
            <li>Banana</li>
            <li>{food.toLowerCase()}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food