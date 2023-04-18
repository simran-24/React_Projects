    import React,{useState} from 'react'
    import {AiFillCaretLeft,AiFillCaretRight} from 'react-icons/ai'
    import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'
    function Testimonial(props) {

        const review=props.review;
        const Allreviews=props.Allreviews; 

        let[index,setIndex]=useState(0);
        

        function leftHandler()
        {
            if(index<0)
            {
                setIndex(Allreviews.length-1)
            }
            else if( (index>0) || (index<=Allreviews.length))
            {
                setIndex(index--)
            }
        }

        function rightHandler()
        {
            if((index===0) || (index<Allreviews.length))
                {
                    setIndex(index++)
                }
            else
            setIndex(0)
        }


    return (
        <div className='w-[450px] ml-50px sm:ml-[200px] md:ml-[300px] lg:ml-[500px]'>
            <div className='absolute z-10 '>
                <img src={review[index].image} alt="Testmonial" className='relative bg-purple-300 rounded-full z-10 w-[60px] h-[60px] top-[-80px] left-[30px] sm:left-[-90px]  lg:left-[-90px] md:w-[80px] md:h-[80px]  '></img>
                <div className='bg-purple-300 rounded-full relative z-0 w-[60px] h-[60px] top-[-140px] left-[45px] sm:left-[-80px] sm:top[-100px] md:w-[80px] md:h-[80px] md:top-[-160px] lg:top-[-160px]' ></div>
            </div>
            <div className='text-center flex flex-col'>  
                <h1 className='font-bold md:text-2xl sm:text-xl'>{review[index].name}</h1>
                <p className=''>{review[index].job}</p>
                <FaQuoteLeft className='mx-auto text-purple-400 text-2xl mt-5'/>
                <p className='mt-4 p-5'> {review[index].text}</p>
                <FaQuoteRight className='mx-auto text-purple-400 text-2xl mt-4'/>
                <div className='flex justify-center mt-4 '>
                <AiFillCaretLeft onClick={leftHandler} className='cursor-pointer text-purple-400 text-3xl hover:text-purple-700 mr-[100px]'/>
                <AiFillCaretRight onClick={rightHandler} className='cursor-pointer text-purple-400 text-3xl hover:text-purple-700'/>
                </div>
            </div>
        
        </div>
    )
    }

    export default Testimonial
