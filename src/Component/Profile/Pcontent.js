import React from 'react'
import { useRef } from 'react'
import { store } from '../Store/store'
import { useSelector } from 'react-redux'


const Pcontent = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        store.dispatch({type: "add", post: pRef.current.value })
        pRef.current.value = ""
    }

     const pRef = useRef() 
      
     const post = useSelector((state) => state.post)
      
    console.log(post)

    return (
       <main className='content-wrp'>
           <section className='pform-wrp'>
               <form className='pform'>
                   <label className='plabel'>
                        Tweet: 
                   </label>
                   <div className='input-wrp'>
                      <input type="text"  ref={pRef}/>
                   </div>
                   <button onSubmit={handleSubmit}> Add Comment </button>
               </form>
           </section>
           <section className='display-post'>

           </section>
           <section>
                    {post.map( (sPost) => {
                    <>
                        <div key={sPost.id} className='SinglePost'>
                            {sPost.post}
                        </div>
                        <div>
                            <span className='likes'>  </span>
                            {sPost.timeStamp}
                        </div>
                    </>
                    })}
           </section>
       </main>
    )
}

export default Pcontent
