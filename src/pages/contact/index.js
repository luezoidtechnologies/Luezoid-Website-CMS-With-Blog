import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    return (
      // <Layout>
      //   <section className="section">
      //     <div className="container">
      //       <div className="content">
      //         <h1>Contact</h1>
      //         <form
      //           name="contact"
      //           method="post"
      //           action="/contact/thanks/"
      //           data-netlify="true"
      //           data-netlify-honeypot="bot-field"
      //           onSubmit={this.handleSubmit}
      //         >
      //           {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      //           <input type="hidden" name="form-name" value="contact" />
      //           <div hidden>
      //             <label>
      //               Don’t fill this out:{' '}
      //               <input name="bot-field" onChange={this.handleChange} />
      //             </label>
      //           </div>
      //           <div className="field">
      //             <label className="label" htmlFor={'name'}>
      //               Your name
      //             </label>
      //             <div className="control">
      //               <input
      //                 className="input"
      //                 type={'text'}
      //                 name={'name'}
      //                 onChange={this.handleChange}
      //                 id={'name'}
      //                 required={true}
      //               />
      //             </div>
      //           </div>
      //           <div className="field">
      //             <label className="label" htmlFor={'email'}>
      //               Email
      //             </label>
      //             <div className="control">
      //               <input
      //                 className="input"
      //                 type={'email'}
      //                 name={'email'}
      //                 onChange={this.handleChange}
      //                 id={'email'}
      //                 required={true}
      //               />
      //             </div>
      //           </div>
      //           <div className="field">
      //             <label className="label" htmlFor={'message'}>
      //               Message
      //             </label>
      //             <div className="control">
      //               <textarea
      //                 className="textarea"
      //                 name={'message'}
      //                 onChange={this.handleChange}
      //                 id={'message'}
      //                 required={true}
      //               />
      //             </div>
      //           </div>
      //           <div className="field">
      //             <button className="button is-link" type="submit">
      //               Send
      //             </button>
      //           </div>
      //         </form>
      //       </div>
      //     </div>
      //   </section>
      // </Layout>
      <div>
        <div className="d-block" id="contact-us-page">
    <iframe className="border-0 contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d803.4561956651662!2d77.21498797072277!3d28.548710135661437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf4cee3ee4a8e368e!2sLuezoid+Technologies+Private+Limited!5e0!3m2!1sen!2sin!4v1551771849981"
            width="100%" height="400" frameborder="0" allowfullscreen></iframe>

    <div className="container bg-white contact-form-section card p-5 mb-4">
        <div className="row">
            <div className="col-md-12 text-center">
                <a href="index.html">
                    <img src="assets/images/luezoid-logo.png" alt="Luezoid Logo" width="230" height="120" />
                </a>
            </div>
        </div>
        <div className="contact-form m-md-2">
            <h2 className="font-weight-bold mt-3">Start Project</h2>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4">
                    <div className="mt-5">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="alert alert-dismissible alert-danger error_submit" style={{display: "none"}}></div>
                                <div className="alert alert-dismissible alert-success success_submit" style={{display: "none"}}></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label for="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Name" required/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="mobile">Mobile</label>
                                <input type="text" className="form-control" id="mobile" placeholder="Mobile" required/>
                            </div>
                            <div className="form-group col-md-12">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Email" required/>
                            </div>
                            <div className="form-group col-md-12">
                                <label for="message">Message</label>
                                <textarea type="textarea" className="form-control" id="message" rows="5" placeholder="Your message here" style={{resize:"none"}}></textarea>
                            </div>
                        </div>
                        <div className="col-md-12 text-center ">
                            <button type="submit" className="btn btn-round btn-gradient border-0 m-2 pl-4 pr-4" id="submitMessage">Submit</button>
                            <button type="reset" className="btn btn-round btn-gradient border-0 m-2 pl-4 pr-4" id="resetMessage">Reset</button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-1 col-md-1 col-sm-12 col-xs-12"></div>

                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 luezoid-briefs">
                    <div className="row mt-5">
                        <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 text-center">
                            <i className="fas fa-map-marker-alt fa-2x color-purple mt-2"></i>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                            <h5 className="font-weight-bold">Find us at the office</h5>
                            <p>125-A, 2nd Floor, Shahpur Jat,<br/>
                                New Delhi 110049
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 text-center">
                            <i className="fas fa-mobile-alt fa-2x color-purple mt-2"></i>
                        </div>
                        <div className="col-md-10">
                            <h5 className="font-weight-bold">Give us a ring</h5>
                            <p>+91 9666718620<br/>
                               +91 9811070940</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 text-center">
                            <i className="fas fa-briefcase fa-2x color-purple mt-2"></i>
                        </div>
                        <div className="col-md-10">
                            <h5 className="font-weight-bold">Legal Information</h5>
                            <a href="https://www.tofler.in/luezoid-technologies-private-limited/company/U72900DL2018PTC338880" target="_blank">
                                <p>Luezoid Technologies<br/>
                                    Private Limited</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid mt-2">
        <footer>
            <div className="row">
                <div className="footer-list col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
                    <ul className="list-unstyled text-uppercase text-center" style={{display: "inline-table"}}>
                        <li style={{display: "inline"}}>
                            <a href="https://www.facebook.com/luezoidtechnologies" target="_blank">
                                <i className="fab fa-facebook-square fa-2x color-facebook"></i>
                            </a>
                        </li>
                        <li style={{display: "inline"}}>
                            <a href="https://github.com/luezoidtechnologies" target="_blank">
                                <i className="fab fa-github-square fa-2x color-github"></i>
                            </a>
                        </li>
                        <li style={{display: "inline"}}>
                            <a href="https://stackoverflow.com/users/10594868/luezoid-technologies" target="_blank">
                                <i className="fab fa-stack-overflow fa-2x color-stack-overflow"></i>
                            </a>
                        </li>
                        <li style={{display: "inline"}}>
                            <a href="https://twitter.com/luezoidtech" target="_blank">
                                <i className="fab fa-twitter-square fa-2x color-twitter"></i>
                            </a>
                        </li>
                        <li style={{display: "inline"}}>
                            <a href="https://www.linkedin.com/in/luezoid-technologies-250597174/" target="_blank">
                                <i className="fab fa-linkedin fa-2x color-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12"></div>
                <div className="footer-copyright col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
                    <p className="mt-2">
                        <i className="far fa-copyright"></i> 2019 Luezoid Technologies Pvt. Ltd.
                    </p>
                </div>
            </div>
        </footer>
    </div>
</div>
      </div>
    )
  }
}
