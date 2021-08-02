import React from 'react'
const Monsters = ({
   monsters,
   selectMonster
}) => {


    return (
        <div className="row">
            {
                monsters.map((monster)=>{
                   return <div className="col-md-12 col-lg-6 btn" style={{border:"2px solid black",padding:"10px"}} colkey={monster.id} onClick={()=>selectMonster(monster.id)}>
                        <img src={monster.icon} alt="monster 1" width="90%" height="auto"/>
                    </div>
                })
            }
        </div>
    )
}

export default Monsters
