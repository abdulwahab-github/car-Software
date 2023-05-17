import React , {useState} from 'react'

function Navbar({valu}) {
   
    const [searchval, setsearchval] = useState("")
 valu(searchval)

    
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Car Bookeer</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
       
      
      
      <form className="d-flex w-75 ms-5 ">
        <input className="form-control me-2" onChange={e => setsearchval(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar