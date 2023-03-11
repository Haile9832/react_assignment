import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import moment from "moment";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }
  renderComments(selectedDish) {
    return (
      <>
        <h4>Comments</h4>
        {selectedDish.comments.map((comment) => {
          return (
            <div>
              <div>{comment.comment}</div>
              <br />
              <div>
                --- {comment.author},{" "}
                {moment(comment.date).format("MMMM Do YYYY")}
              </div>
              <br />
            </div>
          );
        })}
      </>
    );
  }
  render() {
    if (this.props.selectedDish != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg
                top
                src={this.props.selectedDish.image}
                alt={this.props.selectedDish.name}
              />
              <CardBody>
                <CardTitle>{this.props.selectedDish.name}</CardTitle>
                <CardText>{this.props.selectedDish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(this.props.selectedDish)}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;
