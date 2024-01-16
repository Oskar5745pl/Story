
import './Nav.css'

function Nav() {

  return (
    <>
      <div className='nav-bar'>

            <a href="/" className='logoBox'><h2>Morning adhkar</h2></a>
            {/* <div className="toggle-switch">
              <label className="switch-label">
                <input type="checkbox" className="checkbox"/>
                <span className="slider"></span>
              </label>
            </div>   */}
            <a href="/evening" className='logoBox'><h2>Evening adhkar</h2></a>
      </div>
    </>
  )
}

export default Nav
