import "bootstrap/dist/css/bootstrap.min.css";
import "./newsearcher.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

import JSONDATA from "./MockData.json";
import { Card, CardGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { observer } from "mobx-react";

function Search2({ store }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700"
        ></link>
      </head>

      <div className="row">
        <div className="col-md-12">
          <div class="container-fluid">
            <div>
              <div>
                <CardGroup>
                  {JSONDATA.filter((val) => {
                    if (store.searchTerm === "") {
                      return null;
                    } else if (
                      val.city
                        .toLowerCase()
                        .includes(store.searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  }).map((val, key) => {
                    return (
                      <div>
                        <Card
                          key={key}
                          style={{
                            width: "400px",
                            height: "500px",
                            margin: "10px",
                          }}
                        >
                          <Card.Body
                            style={{ textAlign: "center", padding: "20px" }}
                          >
                            <Card.Img
                              variant="top"
                              src={val.img}
                              alt="hotel image"
                              width="16rem"
                            />
                            <Card.Title style={{ padding: "20px" }}>
                              {val.hotelName}
                            </Card.Title>
                            <Card.Text>
                              <p>Hotel Id : {val.hotelId}</p>
                              <p>Location : {val.city} </p>
                              <p>Price for a day : {val.price} INR</p>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    );
                  })}
                </CardGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(Search2);
