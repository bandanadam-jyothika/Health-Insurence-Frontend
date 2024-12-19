import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Typography } from "@mui/material";
import p1 from "../../images/p3.jpeg";
function Header1() {
    return (<div>

        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="ms-5">
                    <img src={p1} className="rounded" alt="Logo" width="200px" height="50px" />
                </div>
                <div>
                    <Typography>
                        <img src="" />
                    </Typography>
                    <div className="root">
                        <AccountCircleIcon fontSize="large" />
                    </div>
                </div>
            </nav>
        </div>

    </div>
    )
}
export default Header1;