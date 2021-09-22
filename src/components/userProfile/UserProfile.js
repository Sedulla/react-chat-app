import React, { Component } from 'react';
import p1 from '../../images/abdul-majid.jpg';


class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle('open');
  };

  render() {
    return (
      <>
        <div className="main__userprofile">
          <div className="profile__card user__profile__image">
            <div className="profile__image">
              <img
                src={p1}
                alt=""
              />
            </div>
            <h4>Ahmad</h4>
            <p>CEO & Founder at Labrin Inc</p>
          </div>
          <div className="profile__card">
            <div
              className="card__header"
              onClick={(e) => {
                this.toggleInfo(e);
              }}
            >
              <h4>Information</h4>
              <i className="fa fa-angle-down"></i>
            </div>
            <div className="card__content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
              exercitationem fuga explicabo hic officiis libero fugit tenetur
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UserProfile;
