import React from 'react'


export default function Card(props) {
    return (
        <> 
        {/* <div className="row"> */}
            <div className=" shadow-2xl box-border p-4 ">
                <div className=" card bg-gradient-to-r from-slate-900 to-slate-500 to-s-500 text-white px-2 ">
                    <div className="card-body">
                        <h1 className="card-title font-bold">{props.heading}</h1>
                        <p className="card-text">{props.title1}</p>
                        <p className="card-text">{props.title2}</p>
                        <p className="card-text">{props.title3}</p>
                    </div>
                </div>
            </div>
        {/* </div> */}
        
            {/* <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title">Elementry Course</h1>
                            <p className="card-text">39 Free Lesson</p>
                            <p className="card-text">Great For Beginner Student</p>
                            <p className="card-text">Earn a certificate upon completion</p>
                        </div>
                    </div>
                </div>
                <br />
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                        <h1 className="card-title">Elementry Course</h1>
                            <p className="card-text">39 Free Lesson</p>
                            <p className="card-text">Great For Beginner Student</p>
                            <p className="card-text">Earn a certificate upon completion</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                        <h1 className="card-title">Elementry Course</h1>
                            <p className="card-text">39 Free Lesson</p>
                            <p className="card-text">Great For Beginner Student</p>
                            <p className="card-text">Earn a certificate upon completion</p>
                        </div>
                    </div>
                </div>
                <br />
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                        <h1 className="card-title">Elementry Course</h1>
                            <p className="card-text">39 Free Lesson</p>
                            <p className="card-text">Great For Beginner Student</p>
                            <p className="card-text">Earn a certificate upon completion</p>
                        </div>
                    </div>
                </div>
            </div>
         */}
        </>
    )
}
