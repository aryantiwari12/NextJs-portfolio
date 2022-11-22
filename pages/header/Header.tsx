import Link from "next/link"
import classes from '../header/header.module.css'
const Header = () => {

    const onChangeDark=()=>{
        let element = document.body;
        element.classList.toggle("dark-mode");
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand fs-1 font-weight-bold hello" href="#">AR<span className="text-danger">YAN</span> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item font-weight-bold ">
                                <Link className="nav-link active" aria-current="page" href="#"><span className={`text-dark
                                
                                
                                
                                
                                
                                font-weight-bold hello`}>HOME</span></Link>
                            </li>
                            <li className="nav-item font-weight-bold ">
                                <Link className="nav-link " href="#"><span className="text-dark font-weight-bold hello">ABOUT</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#"><span className="text-dark font-weight-bold hello">WORK</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#"><span className="text-dark font-weight-bold hello">SKILL</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#"><span className="text-dark font-weight-bold hello">CONTACT</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#"><span className="text-dark font-weight-bold hello">RESUME</span></Link>
                            </li>

                            <label className="switch mt-2" >
                                <input type="checkbox" onChange={onChangeDark}/>
                                    <span className="slider round"></span>
                            </label>

                        </ul>


                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header