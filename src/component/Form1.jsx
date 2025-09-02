import React, { useState } from "react";

const Form1 = () => {
  const [user, setUser] = useState({ email: "", pass: "", check: false });
  const [error, setError] = useState({ email: "", pass: "" ,check:false});

  const handler = (e) => {
    const { name, value } = e.target;
    setUser((pre) => ({ ...pre, [name]: value }));
  };

  const change = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


      let IsValid = true
    /* --- Email Validation --- */
    if (user.email === "") {
      setError((pre) => ({ ...pre, email: "It is mandatory field" }));
    IsValid = false
    
    } else if (!emailRegex.test(user.email)) {
      setError((pre) => ({ ...pre, email: "Email Id is not Correct" }));
    IsValid = false
    
    } else {
      setError((pre) => ({ ...pre, email: "" }));
    }

    /* --- Password Validation --- */
    if (user.pass === "") {
      setError((pre) => ({
        ...pre,
        pass: "As it is mandatory field it can't be empty",
      }));

      IsValid = false
    } else if (!passRegex.test(user.pass)) {
      setError((pre) => ({
        ...pre,
        pass: "Password must have at least 1 uppercase, 1 lowercase, 1 number, 1 special char (min 8 chars)",
      }));

      IsValid = false
    } else {
      setError((pre) => ({ ...pre, pass: "" }));
    }

    if (user.check== false)

      {

        setError((pre)=> ({
...pre, check:"please tick the check box"})
     
          
      
      )
      IsValid = false
      }

      else

        {
setError((pre)=> ({
...pre, check:false})
)

        }
if(!IsValid)
  return;
    alert(`My Email id is: ${user.email} \nPass: ${user.pass}`);
  
  setUser({ email: "", pass: "", check: false })
  
  };

  return (
    <>
      <div className="container d-flex ">
        <div className="row my-5 bg-white">
          <div className="col-6 col-sm-12 col-lg-12 ps-5 px-5 py-5">
            <form onSubmit={change}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  onChange={handler}
                  value={user.email}
                  className="form-control"
                  name="email"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
                {error.email && (
                  <span className="text-danger">{error.email}</span>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  autoComplete="off"
                  value={user.pass}
                  onChange={handler}
                  className="form-control"
                  name="pass"
                />
                {error.pass && <span className="text-danger">{error.pass}</span>}
              </div>

              <div className="mb-3 form-check py-1">
                <input
                  type="checkbox"
                  name="check"
                  checked={user.check}
                  className="form-check-input"
                  id="exampleCheck1"
                  onChange={(e) =>
                    setUser((pre) => ({ ...pre, check: e.target.checked }))
                  }
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label><br></br>
                {
error.check && <span className="text-danger">{error.check}</span>


                }
              </div>

              <button type="submit" className="btn btn-primary  ms-5">
                Submit
              </button>

              
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form1;
