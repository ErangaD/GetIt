import React from "react";

export class Profile extends React.Component {
    render(){
        return(
            <div>
                <section id="featured">
                    {/* start slider */}
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad">
                                <div className="panel panel-info">
                                    <div className="panel-heading">
                                        <h3 className="panel-title text-center">Profile</h3>
                                    </div>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div style={{paddingleft:'50'}} className="col-md-3 col-lg-9 img-responsive center-block">
                                                <img alt="User Pic" src="http://babyinfoforyou.com/wp-content/uploads/2014/10/avatar-300x300.png" className="img-circle img-responsive" />
                                            </div>
                                            <div className=" col-md-9 col-lg-9 ">
                                                <table className="table table-user-information">
                                                    <tbody>
                                                    <tr>
                                                        <td>Name:</td>
                                                        <td>Programming</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Address:</td>
                                                        <td>06/23/2013</td>
                                                    </tr>
                                                    <tr>
                                                    </tr>
                                                    <tr>
                                                        <td>Email</td>
                                                        <td><a href="mailto:info@support.com">info@support.com</a></td>
                                                    </tr>
                                                    <tr><td>Phone Number</td>
                                                        <td>123-4567-890(Landline)<br /><br />555-4567-890(Mobile)
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="box">
                                            <div className="box-gray aligncenter">
                                                <h4>Posts</h4>
                                                <a href="/posts">
                                                    <div className="icon">
                                                        <i className="glyphicon glyphicon-align-justify" />
                                                    </div>
                                                    <p>
                                                        Voluptatem accusantium doloremque laudantium sprea totam rem aperiam.
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="box">
                                            <div className="box-gray aligncenter">
                                                <h4>Edit Profile</h4>
                                                <div className="icon">
                                                    <i className="glyphicon glyphicon-list-alt" />
                                                </div>
                                                <p>
                                                    Voluptatem accusantium doloremque laudantium sprea totam rem aperiam.
                                                </p>
                                            </div>
                                            <div className="box-bottom">
                                                <a href="#">Learn more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="box">
                                            <div className="box-gray aligncenter">
                                                <h4>Messages</h4>
                                                <div className="icon">
                                                    <i className="glyphicon glyphicon-user" />
                                                </div>
                                                <p>
                                                    Voluptatem accusantium doloremque laudantium sprea totam rem aperiam.
                                                </p>
                                            </div>
                                            <div className="box-bottom">
                                                <a href="#">Learn more</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* divider */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="solidline">
                                </div>
                            </div>
                        </div>
                        {/* end divider */}
                        {/* Portfolio Projects */}
                    </div>
                </section>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="widget">
                                    <h5 className="widgetheading">Get in touch with us</h5>
                                    <address>
                                        <strong>Moderna company Inc</strong><br />
                                        Modernbuilding suite V124, AB 01<br />
                                        Someplace 16425 Earth </address>
                                    <p>
                                        <i className="icon-phone" /> (123) 456-7890 - (123) 555-7891 <br />
                                        <i className="icon-envelope-alt" /> email@domainname.com
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="widget">
                                    <h5 className="widgetheading">Pages</h5>
                                    <ul className="link-list">
                                        <li><a href="#">Press release</a></li>
                                        <li><a href="#">Terms and conditions</a></li>
                                        <li><a href="#">Privacy policy</a></li>
                                        <li><a href="#">Career center</a></li>
                                        <li><a href="#">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="widget">
                                    <h5 className="widgetheading">Latest posts</h5>
                                    <ul className="link-list">
                                        <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
                                        <li><a href="#">Pellentesque et pulvinar enim. Quisque at tempor ligula</a></li>
                                        <li><a href="#">Natus error sit voluptatem accusantium doloremque</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="widget">
                                    <h5 className="widgetheading">Flickr photostream</h5>
                                    <div className="flickr_badge">
                                    </div>
                                    <div className="clear">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="sub-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="copyright">
                                        <p>© Moderna Theme. All right reserved.</p>
                                        <div className="credits">
                                            {/*
                                             All the links in the footer should remain intact.
                                             You can delete the links only if you purchased the pro version.
                                             Licensing information: https://bootstrapmade.com/license/
                                             Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Moderna
                                             */}
                                            <a href="https://bootstrapmade.com/">Free Bootstrap Themes</a> by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="social-network">
                                        <li><a href="#" data-placement="top" title="Facebook"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="#" data-placement="top" title="Twitter"><i className="fa fa-twitter" /></a></li>
                                        <li><a href="#" data-placement="top" title="Linkedin"><i className="fa fa-linkedin" /></a></li>
                                        <li><a href="#" data-placement="top" title="Pinterest"><i className="fa fa-pinterest" /></a></li>
                                        <li><a href="#" data-placement="top" title="Google plus"><i className="fa fa-google-plus" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
