import React from 'react'
import { useDispatch } from 'react-redux';
import Logo from "../logo.svg";
import { logmeout } from './redux/postSlice';
export default function Sidebar() {
    const dispath = useDispatch();

    return (
        <div className='sidebar items'>
            <div className='logo'>
                <img alt='img' src={Logo} width="150px" />
            </div>
            <div className='options'>
                <ul>
                    <li className='fa fa-home'> Home &nbsp;</li>
                    <li className='fa fa-user'> Profile </li>
                    <li className='fa fa-tools'> Settings </li>
                    <li onClick={()=> dispath(logmeout())} className='fa fa-sign-out'> Logout </li>
                    <li className='fa fa-ellipsis'> More &nbsp;</li>
                </ul>
            </div>
        </div>
    )
}
