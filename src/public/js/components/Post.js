import React from 'react';
export class Post extends React.Component{
    render(){
        return(

            <section id="content">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>Example on <strong>3 columns</strong></h4>
                        </div>
                        <div className="col-lg-4 ">
                            <div className="pricing-box-alt">
                                <div className="pricing-heading">
                                    <h3>Very <strong>Basic</strong></h3>
                                </div>
                                <div className="pricing-terms">
                                    <h6>$15.00 / Month</h6>
                                </div>
                                <div className="pricing-content">
                                    <ul>
                                        <li><i className="icon-ok" /> Negotiability</li>
                                        <li><i className="icon-ok" /> jfdisojifjdsihdshyfudgsygfdygyfdgs
                                            dsjihduhdusgyfdgtojfdijfidojs
                                            fdsifdjsijfduishuihdsuihue</li>
                                    </ul>
                                </div>
                                <div className="pricing-action">
                                    <a href="#" className="btn btn-medium btn-theme"><i className="icon-bolt" /> Register now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 ">
                            <div className="pricing-box-alt">
                                <div className="pricing-heading">
                                    <h3>Very <strong>Basic</strong></h3>
                                </div>
                                <div className="pricing-terms">
                                    <h6>$15.00 / Month</h6>
                                </div>
                                <div className="pricing-content">
                                    <ul>
                                        <li><i className="icon-ok" /> 100 applications</li>
                                        <li><i className="icon-ok" /> 24x7 support available</li>
                                    </ul>
                                </div>
                                <div className="pricing-action">
                                    <a href="#" className="btn btn-medium btn-theme"><i className="icon-bolt" /> Register now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}