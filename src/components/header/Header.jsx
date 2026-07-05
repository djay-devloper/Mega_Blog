import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {

  // useSelector() receives the entire Redux store state as its only argument.
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='border-b border-sky-100 bg-sky-100/80 py-3 shadow-sm backdrop-blur'>
      <Container>
        <nav className='flex items-center gap-4'>
          <div className='mr-2'>
            <Link to='/' className='inline-flex items-center rounded-full p-1 transition hover:scale-105'>
              <Logo width='40px' />
            </Link>
          </div>
          <ul className='ml-auto flex flex-wrap items-center gap-2'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 active:scale-95'
                >{item.name}</button>
              </li>
            ) : null
            )}

            {/* If authStatus is true, the expression proceeds and returns the <LogoutBtn/>. */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header

// it is authentication-aware, it displays change automatically depending on whether the user is currently logged in or logged out.
// If a user clicks the "Login" button, the item.slug for that button is "/login". it runs navigate(/login).