import React from 'react';

export class SignUp extends React.Component{
    render(){
        return(
            <div className="container">
                <div id="signupbox" style={{marginTop: 50}} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <div className="panel-title">Sign Up</div>
                            <div style={{float: 'right', fontSize: '85%', position: 'relative', top: '-10px'}}><a id="signinlink" href="/login">Sign In</a></div>
                            <div className="row">
                                 <div className="panel with-nav-tabs panel-info">
                                        <div className="panel-heading">
                                            <ul className="nav nav-tabs nav-justified" width="100%">
                                                <li className="active"><a href="#tab1primary" data-toggle="tab">Buyer</a></li>
                                                <li><a href="#tab2primary" data-toggle="tab">Seller</a></li>
                                            </ul>
                                        </div>
                                        <div className="panel-body">
                                            <div className="tab-content">
                                                <div className="tab-pane fade in active" id="tab1primary">
                                                    <div className="panel-body">
                                                        <form id="signupform" className="form-horizontal" role="form" method="post" action="/signUp">
                                                            <div id="signupalert" style={{display: 'none'}} className="alert alert-danger">
                                                                <p>Error:</p>
                                                                <span />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="email" className="col-md-3 control-label">Email</label>
                                                                <div className="col-md-9">
                                                                    <input type="text" className="form-control" name="email" placeholder="Email Address" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="firstname" className="col-md-3 control-label">First Name</label>
                                                                <div className="col-md-9">
                                                                    <input type="text" className="form-control" name="firstname" placeholder="First Name" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="lastname" className="col-md-3 control-label">Last Name</label>
                                                                <div className="col-md-9">
                                                                    <input type="text" className="form-control" name="lastname" placeholder="Last Name" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="password" className="col-md-3 control-label">Password</label>
                                                                <div className="col-md-9">
                                                                    <input type="password" className="form-control" name="passwd" placeholder="Password" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="telNo" className="col-md-3 control-label">Telephone No</label>
                                                                <div className="col-md-9">
                                                                    <input type="tel" className="form-control" name="icode" placeholder="0000000000" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                {/* Button */}
                                                                <div className="col-md-offset-3 col-md-9">
                                                                    <button id="btn-signup" type="button" className="btn btn-info"><i className="icon-hand-right" /> &nbsp; Sign Up</button>
                                                                    <span style={{marginLeft: 8}}>or</span>
                                                                </div>
                                                            </div>
                                                            <div style={{borderTop: '1px solid #999', paddingTop: 20}} className="form-group">
                                                                <div className="col-md-offset-3 col-md-9">
                                                                    <button id="btn-fbsignup" type="button" className="btn btn-primary"><i className="icon-facebook" /> &nbsp; Sign Up with Facebook</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade in active" id="tab1primary">
                                                    Prima
                                                </div>
                                                <div className="tab-pane fade" id="tab2primary">
                                                    Primary 2
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}