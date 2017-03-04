import React from "react";

export class Header extends React.Component{
    render(){
        return(
            <div className="container">
                {/* Static navbar */}
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <a className="navbar-brand" href="#">Project name</a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret" /></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else here</a></li>
                                        <li role="separator" className="divider" />
                                        <li className="dropdown-header">Nav header</li>
                                        <li><a href="#">Separated link</a></li>
                                        <li><a href="#">One more separated link</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li className="active"><a href="./">Default <span className="sr-only">(current)</span></a></li>
                                <li><a href="../navbar-static-top/">Static top</a></li>
                                <li><a href="../navbar-fixed-top/">Fixed top</a></li>
                            </ul>
                        </div>{/*/.nav-collapse */}
                    </div>{/*/.container-fluid */}
                </nav>
                {/* Main component for a primary marketing message or call to action */}
                <div className="jumbotron">
                    <h1>Navbar example</h1>
                    <p>This example is a quick exercise to illustrate how the default, static navbar and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
                    <p>
                        <a className="btn btn-lg btn-primary" href="../../components/#navbar" role="button">View navbar docs »</a>
                    </p>
                </div>
            </div>
        );
    }
}