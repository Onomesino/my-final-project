import React, { useEffect, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { Grid, Form, Button } from "semantic-ui-react";
import { Loader } from "semantic-ui-react";
import { Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import countryList from "react-select-country-list";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Profile = () => {
  const [data, setData] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    Info: "",
    contact: "",
    Date: "",
    Gender: "",
    country: "",
  });
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [hasProfilePicture, setHasProfilePicture] = useState(false);
  const [ph, setPh] = useState("");
  const navigate = useNavigate();

  const storage = getStorage();

  const options = countryList().getData();

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("upload is paused");
              break;
            case "running":
              console.log("upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
            setHasProfilePicture(true);
          });
        }
      );
    };
    if (file) uploadFile();
  }, [file, storage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    let errors = {};
    if (!data.Firstname) {
      errors.Firstname = "Your firstname is required";
    }
    if (!data.Lastname) {
      errors.Lastname = "Your Lastname is required";
    }
    if (!data.Email) {
      errors.Email = "Your email is required";
    }
    if (!data.Info) {
      errors.Info = "Your info is required";
    }
    if (!data.contact) {
      errors.Contact = "Your contact is required";
    }
    if (!data.country) {
      errors.Country = "Your country is required";
    }
    if (!data.date) {
      errors.Date = "Your date of birth is required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    setIsSubmit(true);
    const docRef = collection(db, "users");
    await addDoc(docRef, {
      ...data,
      timestamp: serverTimestamp(),
    });
    navigate("/profile");
  };

  return (
    <div
      style={{
        backgroundImage: 'url("Fashion-logo.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh", // Set the background to cover the whole viewport
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Grid centered columns={2} style={{ height: "80vh" }}>
          <img src="Fashion-logo.png" alt="" srcset="" />
          <Grid.Row>
            <Grid.Column textAlign="center">
              <div>
                {isSubmit ? (
                  <Loader active inLine="centered" size="huge" />
                ) : (
                  <div>
                    <h2>Update Profile</h2>
                    <Form onSubmit={handleSubmit} className="form-div2">
                      <Row>
                        <Col>
                          <Form.Field>
                            <label>First name</label>
                            <input
                              type="text"
                              name="FirstName"
                              onChange={handleChange}
                              value={data?.Name || ""}
                              autoFocus
                            />
                            {errors.Name && (
                              <p className="error">{errors.Name}</p>
                            )}
                          </Form.Field>
                        </Col>
                        <Col>
                          <Form.Field>
                            <label>Last name</label>
                            <input
                              type="text"
                              name="LastName"
                              onChange={handleChange}
                              value={data?.Name || ""}
                              autoFocus
                            />
                            {errors.Name && (
                              <p className="error">{errors.Name}</p>
                            )}
                          </Form.Field>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Field>
                            <label>Contact</label>
                            <input
                              type="text"
                              name="contact"
                              onChange={handleChange}
                              value={data?.contact || ""}
                              autoFocus
                            />
                            {errors.contact && (
                              <p className="error">{errors.contact}</p>
                            )}
                          </Form.Field>
                        </Col>
                        <Col>
                          <Form.Field>
                            <label>Email</label>
                            <input
                              type="text"
                              name="Email"
                              onChange={handleChange}
                              value={data?.Email || ""}
                              autoFocus
                            />
                            {errors.Email && (
                              <p className="error">{errors.Email}</p>
                            )}
                          </Form.Field>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Field>
                            {/* <label>date</label> */}
                            <input
                              type="date"
                              onChange={(e) => setDate(e.target.value)}
                            />
                          </Form.Field>
                        </Col>
                        <Col>
                          <Form.Field></Form.Field>
                        </Col>
                        <Col>
                          <Form.Field>
                            {/* <label>Country</label> */}
                            <select
                              name="country"
                              value={data?.country || ""}
                              onChange={handleChange}
                            >
                              <option value="">Select Country</option>
                              {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </Form.Field>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Field>
                            <label>Gender</label>
                            <input
                              type="radio"
                              name="Gender"
                              value="Male"
                              onChange={handleChange}
                              className="gender"
                            />
                            Male
                            <input
                              type="radio"
                              name="Gender"
                              value="Female"
                              onChange={handleChange}
                              className="gender"
                            />
                            Female
                          </Form.Field>
                        </Col>
                        <Col>
                          <Form.Field>
                            {hasProfilePicture ? (
                              <div className="gender-icon">
                                {data.Gender === "Male"
                                  ? "Male Icon"
                                  : "Female Icon"}
                              </div>
                            ) : null}
                          </Form.Field>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <PhoneInput
                            country={"in"}
                            value={ph}
                            onChange={setPh}
                            className="phone"
                          />
                        </Col>
                        <Col>
                          <Form.Field>
                            <label>Info</label>
                            <textarea
                              name="Info"
                              onChange={handleChange}
                              value={data?.Info || ""}
                              autoFocus
                            />
                            {errors.Info && (
                              <p className="error">{errors.Info}</p>
                            )}
                          </Form.Field>
                        </Col>
                      </Row>
                      {/* Other form fields */}
                      <Button
                        primary
                        type="submit"
                        disabled={progress !== null && progress < 100}
                      >
                        Submit
                      </Button>
                    </Form>
                  </div>
                )}
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};

export default Profile;
