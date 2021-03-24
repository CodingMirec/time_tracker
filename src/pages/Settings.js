import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { authFetch, logout } from "../auth";

import "./Settings.css";

import CreateIcon from "@material-ui/icons/Create";

function Settings() {
  const history = useHistory();
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    authFetch("/api/settings")
      .then((response) => {
        if (response.status === 401) {
          setFullname("Sorry you aren't authorized!");
          return null;
        }
        return response.json();
      })
      .then((response) => {
        if (response && response.fullname) {
          setFullname(response.fullname);
        }
      });
  }, []);

  authFetch("/api/username")
    .then((response) => {
      if (response.status === 401) {
        setUsername("Sorry you aren't authorized!");
        return null;
      }
      return response.json();
    })
    .then((response) => {
      if (response && response.username) {
        setUsername(response.username);
      }
    });

  const logOut = (e) => {
    e.preventDefault();

    logout();
    // some logout magic
    history.push("/login");
  };

  const toggleOn = () => {
    setIsToggled(true);
  };

  const toggleOff = () => {
    setIsToggled(false);
  };

  const handleNameChange = (e) => {
    e.preventDefault();
    setFullname(e.target.value);
  };

  return (
    <div className="settings">
      <Sidebar />
      <div className="settings__layout">
        <h1 className="settings__title">Account Settings</h1>
        <div className="settings__container">
          <div className="settings__header">
            <div className="user__info">
              <img
                className="user__photo"
                src="https://avatars.dicebear.com/api/avataaars/.svg"
                alt="avatar"
              />
              <div className="user__details">
                <div className="user__name">
                  <form>
                    <input
                      type="text"
                      className="user__name"
                      onChange={(e) => setFullname(e.target.value)}
                      value={fullname}
                    ></input>
                    <button hidden type="submit" onClick={handleNameChange}>
                      send
                    </button>
                  </form>
                  <CreateIcon />
                </div>
                <span className="user__mail">{username}</span>
              </div>
            </div>
            <button className="logOut" onClick={logOut}>
              Log Out
            </button>
          </div>
          <hr />
          <div className="settings__user">
            <h2>User Settings</h2>
            <div className="user__changes">
              <div className="change__email">
                <h3>Change User Email</h3>
                <form className="change__form">
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="New Email Adress"
                  />
                  <input
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                  />
                  <button>Save it</button>
                </form>
                <p>
                  Here, You can change your old email for some new, without any
                  delay.
                </p>
              </div>
              <hr />
              <div className="change__password">
                <h3>Change User Password</h3>
                <form className="change__form">
                  <input
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                  />
                  <input
                    name="new__password"
                    type="password"
                    required
                    placeholder="New Password"
                  />
                  <button>Save it</button>
                </form>
                <p>
                  Change Your old, annoying password that You always forget to
                  something more You and actual.
                </p>
              </div>
              <hr />
              <div className="change__notif">
                <div className="notif__choice">
                  <input type="checkbox" />
                  <label htmlFor="notif__user">
                    I want to receive email notofication when I change my user
                    settings.
                  </label>
                </div>
                <div className="notif__choice">
                  <input type="checkbox" />
                  <label htmlFor="notif__project">
                    I want to receive emial notification when I am added to new
                    Project group.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
