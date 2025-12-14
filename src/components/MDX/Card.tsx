import React from "react";
import Link from "@docusaurus/Link";

export default function Card({ title, icon, href, arrow, children }) {
  return (
    <Link to={href} className="card card--hoverable" style={{ textDecoration: "none" }}>
      <div className="card__body">
        <h3 style={{color: "white"}}>
          {icon && <i className={`fa fa-${icon}`} style={{ marginRight: 8 }} />}
          {title}
        </h3>
        <p style={{color: "white"}} >{children}</p>
        {arrow && <span style={{color: "white"}}>→</span>}
      </div>
    </Link>
  );
}
