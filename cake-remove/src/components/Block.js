
function Block({src,title,price,alt,id,removeData})
{
    return (
        <div className="border-2 w-96 h-96 rounded-tl-3xl rounded-tr-3xl shadow-lg shadow-gray-800/20 hover:cursor-pointer  hover:transition delay-200 ease-in-out hover:-translate-y-7  hover:shadow-gray-500 ">
            <img src={src} className="w-screen h-5/6 rounded-tl-3xl rounded-tr-3xl" alt={alt}/>
        <div className="flex justify-between items-center">
            <div className="px-4 w-60 ">
                <h3 className=" text-lg font-bold text-violet-900">{title}</h3>
                <p className="text-2 font-medium text-rose-400"> Price : Rs. {price}/-</p>
            </div>
            <button c 
            lassName="w-20 h-10 mr-5 mt-2 rounded-lg bg-green-500 text-white text-lg" onClick={()=>{removeData(id)}} >Remove</button>

        </div>
        
        </div>
    );
}
export default Block;