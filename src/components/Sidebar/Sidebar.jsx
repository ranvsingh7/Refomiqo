import React, { useState } from "react";

import Btn_sidebar from "../Btn_sidebar/Btn_sidebar";
import Dropdown_btn from "../Dropdown/Dropdown_btn";
import "./Sidebar.scss";

import logo from "../../assets/Images/Brand-logo.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [large, setLarge] = useState(false);
  function enterMouse(){
    document.getElementById("sidebar").classList.remove("sidebar_mini")
  }
  function leaveMouse(){
    document.getElementById("sidebar").classList.add("sidebar_mini")
  }
  
  return (
    <>
      <div className="sidebar sidebar_mini" id="sidebar" onMouseLeave={leaveMouse} onMouseEnter={enterMouse}>
        <div className="sidebar_container">
          <div className="sidebar_logo">
            <img src={logo} alt="sidebar_logo" />
            <div className="collapse_btn">
              <span>&#62;</span>
            </div>
          </div>

          <NavLink to="/">
            <Btn_sidebar name={"Dashboard"} img={""} />
          </NavLink>

          <div className="group">
            <div className="group_name">
              <svg>
                {" "}
                <rect />{" "}
              </svg>
              <span>MASTERS</span>
            </div>

            <div className="group_list">
              <NavLink to="/item_service">
                <Btn_sidebar name={"Item/Service"} img={""} />
              </NavLink>
              <NavLink to="banking">
                <Btn_sidebar name={"Banking"} img={""} />
              </NavLink>
              <NavLink to="business_accounts">
                <Dropdown_btn
                  name={"Business Accounts"}
                  img={""}
                  arrow={"﹥"}
                  dropdown_items={["Leads", "Contacts", "Vendors", "Customers"]}
                />
              </NavLink>
            </div>
          </div>
          <div className="group">
            <div className="group_name">
              <svg>
                {" "}
                <rect />{" "}
              </svg>
              <span>ACCOUNTING</span>
            </div>

            <div className="group_list">
              <NavLink to="chart_of_accounts">
                <Btn_sidebar name={"Chart of Accounts"} img={""} />
              </NavLink>
            </div>
          </div>
          <div className="group">
            <div className="group_name">
              <svg>
                {" "}
                <rect />{" "}
              </svg>
              <span>TRANSACTIONS</span>
            </div>

            <div className="group_list">
              <NavLink to="sales">
                <Dropdown_btn
                  name={"sales"}
                  img={""}
                  arrow={"﹥"}
                  dropdown_items={["Leads", "Contacts", "Vendors", "Customers"]}
                />
              </NavLink>
              <NavLink to="purchase">
                <Dropdown_btn
                  name={"Purchase"}
                  img={""}
                  arrow={"﹥"}
                  dropdown_items={["Leads", "Contacts", "Vendors", "Customers"]}
                />
              </NavLink>
              <NavLink to="investment">
                <Dropdown_btn
                  name={"Investment"}
                  img={""}
                  arrow={"﹥"}
                  dropdown_items={["Leads", "Contacts", "Vendors", "Customers"]}
                />
              </NavLink>
              <NavLink to="production">
                <Dropdown_btn
                  name={"Production"}
                  img={""}
                  arrow={"﹥"}
                  dropdown_items={["Leads", "Contacts", "Vendors", "Customers"]}
                />
              </NavLink>
              <NavLink to="job_work">
                <Dropdown_btn
                  name={"Job Work"}
                  img={""}
                  arrow={"﹥"}
                  dropdown_items={["Leads", "Contacts", "Vendors", "Customers"]}
                />
              </NavLink>
              <NavLink to="taxation">
                <Dropdown_btn
                  name={"Taxation"}
                  img={""}
                  arrow={"﹥"}
                  dropdown_items={["Leads", "Contacts", "Vendors", "Customers"]}
                />
              </NavLink>
            </div>
          </div>

          <div className="group">
            <div className="group_name">
              <svg>
                {" "}
                <rect />{" "}
              </svg>
              <span>AUTOMATION</span>
            </div>

            <div className="group_list">
              <NavLink to="workflow_rules">
                <Btn_sidebar name={"Workflow Rules"} img={""} />
              </NavLink>
              <NavLink to="recurring_transaction">
                <Btn_sidebar name={"Recurring Transaction"} img={""} />
              </NavLink>
            </div>
          </div>

          <div className="group">
            <div className="group_name">
              <svg>
                {" "}
                <rect />{" "}
              </svg>
              <span>OTHERS</span>
            </div>

            <div className="group_list">
              <NavLink to="tasks">
                <Btn_sidebar name={"Tasks"} img={""} />
              </NavLink>
              <NavLink to="reports">
                <Btn_sidebar name={"Reports"} img={""} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
