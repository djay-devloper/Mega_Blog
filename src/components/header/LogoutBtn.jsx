import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn(){
    const dispatch= useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
    return(
        <button
        className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandler}
        >Logout</button>
    )
}

export default LogoutBtn

// You will likely need a logout button in more than one place in your application. It might live in a top navigation bar, a mobile slide-out menu, and a "User Settings" page.