import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Logo from "../logo.svg";
import { addPost } from './redux/postSlice';
// import { addPost } from './redux/postSlice';

export default function Main() {
    const refInp = useRef();

    // const data = useSelector((state) => state.o);
    const posts = useSelector((state) => state.posts.items);
    const [data, setData] = useState("");
    const dispatch = useDispatch();
    const validate = () => {
        dispatch(addPost(data)); refInp.current.value = ''; setData('')
    }

    return (
        <div className='main'>
            <div className='header'>
                <div className='header-logo'>
                    <img src={Logo} width="50px" alt='img' />
                </div>
                <div className='header-input'>
                    <input ref={refInp} onChange={(e) => setData(e.target.value)} placeholder='Type...' />
                    <button onClick={() => (data.length > 4 && data.length < 40 ) ? validate() : alert('at least 5 chars upto 40 chars')}>Post</button>
                </div>
            </div>
            <div className='posts'>
                {/*  */}
                {posts.map((p) => (
                    <div key={Math.random()} className='post'>
                        <div className='post-logo'>
                            <img alt='img' src={Logo} width="50px" />
                        </div>
                        <div className='data'><p>{p}</p></div>
                    </div>
                ))}


                {/*  */}
            </div>
        </div>
    )
}
