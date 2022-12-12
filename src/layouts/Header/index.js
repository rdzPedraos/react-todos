import React from "react";
import '../layout.css';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function Header(){
    const currentDate = new Date();
    const [ day, month, year ] = [
        days[currentDate.getDay()],
        months[currentDate.getMonth()],
        currentDate.getFullYear()
    ];

    return(
        <header className="header">
            <p className="header-date"> {`${day}, ${month} ${year}`} </p>

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