import React, { Component } from "react";
import "./newsitem.css";
export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, url, auther, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex: "1", margin: "0px -12%"}} >{source}</span>
          <img
            src={
              imageUrl == null
                ? "https://cdn.w600.comps.canstockphoto.com/no-image-available-picture_csp11465811.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p class="card-text">
              <small class="text-danger-emphasis">
                By {auther == null ? "Unknown" : auther} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={url} className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
