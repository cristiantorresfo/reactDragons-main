

function Filter ({setValueInputFilter,valueInputFilter}){


    return(
        <div class="containter-input">
            <input value={valueInputFilter} onChange={(e)=>{setValueInputFilter(e.target.value)}} id="filter" type="text" placeholder="Filtra por nombre"/>
        </div>
    );
}
export default Filter