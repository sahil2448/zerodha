import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p
            className="text-small text-muted text-center mt-4 "
            style={{ fontSize: "0.8rem", fontWeight: "500" }}
          >
            Thematic investment platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{ width: "10rem" }} />
          <p
            className="text-small text-muted text-center mt-4 "
            style={{ fontSize: "0.8rem", fontWeight: "500" }}
          >
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "10rem" }}
          />
          <p
            className="text-small text-muted text-center mt-4 "
            style={{ fontSize: "0.8rem", fontWeight: "500" }}
          >
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/ZerodhaFundhouse.png"
            style={{ width: "10rem" }}
          />
          <p
            className="text-small text-muted text-center mt-4 "
            style={{ fontSize: "0.8rem", fontWeight: "500" }}
          >
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" style={{ width: "10rem" }} />
          <p
            className="text-small text-muted text-center mt-4 "
            style={{ fontSize: "0.8rem", fontWeight: "500" }}
          >
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{ width: "10rem" }} />
          <p
            className="text-small text-muted text-center mt-4 "
            style={{ fontSize: "0.8rem", fontWeight: "500" }}
          >
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
