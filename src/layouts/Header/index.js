import React from "react";
import '../layout.css';

function Header(){
    return(
        <header className="header">
            <p className="header-date"> Monday, December 12 </p>

            <div className="header-info">
                <h3 className="header-profile-title">
                    GET <br/> <strong style={{opacity: .5}}>SH</strong>IT <br/> DONE
                </h3>
                <img className="header-profile-img" src="profile.png" alt="profile"/>
            </div>
        </header>
    )       
}
//./profile.png
export {Header}