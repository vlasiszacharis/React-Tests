

function DynamicData(){

const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();      

    return(
        <p>Today Date is {day}/{month}/{year}</p>

     );

}


export default DynamicData;