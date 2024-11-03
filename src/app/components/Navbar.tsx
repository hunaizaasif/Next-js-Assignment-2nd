

 export default function Navbar (){
    return(
        <div>
        <header>
           <nav className="flex bg-blue-500 py-5 h-20  justify-between  ">
          <div className= "bg-yellow-300 w-10  h-11 space-x-2 ml-4"  ></div>
          
          
          
          <div className="flex space-x-3">
                   <div className="w-10  h-11 bg-blue-200"></div>
                   <div className="w-10  h-11 bg-purple-500"></div>
                   <div className="w-10  h-11 bg-green-400"></div>
                   <div className="w-10  h-11 bg-orange-400"></div>
          </div>
                   
          <div className="flex space-x-4 px-4">
                  <div className="w-10  h-11 bg-pink-400"></div>
                  <div className="w-10  h-11 bg-teal-400"></div>
          </div>

                </nav>
    
          </header>
        </div>
    )
}