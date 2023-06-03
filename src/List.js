import React from 'react';

function List ({people}) {
    return(

        <>
        {people.map((e)=>{
            return(
                <div className='image'>
                <img src={e.image} />
                <div className='data' >
                    <h3>{e.name}</h3>
                    <p>{e.age} years</p>
                </div>
    
            </div>
                
            )

        }
        

        )}

    
      
        </>
    )
}

export default List;