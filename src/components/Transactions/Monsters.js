import React from 'react'
const Monsters = ({
   monsters,
   selectMonster
}) => {

    return (
        <div className="row shadow">
            {
                monsters.map((monster)=>{
                   return <div className="col-4  pt-2 bg-white rounded mx-auto text-center" colkey={monster.id} onClick={()=>selectMonster(monster.id)}>
                        <img src={monster.icon} alt="monster 1" width="70%" height="60%" /><br/>
                        <small className="text-center pt-1">{monster.subtext}</small>
                    </div>
                })
            }
        </div>
    )
}

export default Monsters
