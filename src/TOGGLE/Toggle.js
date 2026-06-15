import React,{useState} from 'react'


const Toggle = () => {

   const[toggle,setToggle]=useState(true); //true means at first this div,p will show


  return (
    <div style={{margin:"1rem",backgroundColor:"orange",padding:"1.1rem"}}>
      <h1>Toggle</h1>
      {toggle &&(
        <p>lorem epsuim ahjaj jdjamjma jak,Kdfsks szckcs shkdnzndkz dknzbkdz kndzakazbz dazkb
        bzdmak adknzakd dzbaknakj dskiwkisdj dshncsk danklajsjk adnkx ajla ruosjfcm js,ncs,m djakjljdla daladn
      </p>
      )}

      <div style={{marginLeft:"1.3rem",textAlign:"center"}}>

        <button onClick={()=>{setToggle(!toggle)}}>
            {toggle?"Hide":"Show"}
        </button>
        
      </div>
    </div>
  )
}

export default Toggle
