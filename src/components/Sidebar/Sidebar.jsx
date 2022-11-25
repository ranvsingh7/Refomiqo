import React from "react";

import Btn_sidebar from "../Btn_sidebar/Btn_sidebar";
import Dropdown_btn from "../Dropdown/Dropdown_btn";
import "./Sidebar.scss";

import logo from "../../assets/Images/Brand-logo.png";
import dashboard from "../../assets/Images/bxs-dashboard.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_container">
        <div className="sidebar_logo">
          <img src={logo} alt="sidebar_logo" />
          <div className="collapse_btn"><span>&#62;</span></div>
        </div>


        <div className="dashborad_btn active_btn">
          <img src={dashboard} alt="dashboard_btn" />
          <span>Dashboard</span>
        </div>

        <div className="group">
          <div className="group_name">
            <svg>
              {" "}
              <rect />{" "}
            </svg>
            <span>MASTERS</span>
          </div>

          <div className="group_list">
            <Btn_sidebar name={"Item/Service"} img={""} />
            <Btn_sidebar name={"Banking"} img={""} />
            <Dropdown_btn
              name={"Business Accounts"}
              img={""}
              arrow={"﹥"}
              dropdown_items={["Leads", "Contacts", "Vendors", "Customers"]}
            />
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
            <Btn_sidebar name={"Chart of Accounts"} img={""} />
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
          <Dropdown_btn name={"Sales"} img={""} arrow={"﹥"} dropdown_items={["Leads", "Contacts", "Vendors", "Customers"]}/>
          <Dropdown_btn name={"Purchase"} img={""} arrow={"﹥"} dropdown_items={["Leads", "Contacts", "Vendors", "Customers"]}/>
          <Dropdown_btn name={"Investment"} img={""} arrow={"﹥"} dropdown_items={["Leads", "Contacts", "Vendors", "Customers"]}/>
          <Dropdown_btn name={"Production"} img={""} arrow={"﹥"} dropdown_items={["Leads", "Contacts", "Vendors", "Customers"]}/>
          <Dropdown_btn name={"Job Work"} img={""} arrow={"﹥"} dropdown_items={["Leads", "Contacts", "Vendors", "Customers"]}/>
          <Dropdown_btn name={"Taxation"} img={""} arrow={"﹥"} dropdown_items={["Leads", "Contacts", "Vendors", "Customers"]}/>
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
            <Btn_sidebar name={"Workflow Rules"} img={""} />
            <Btn_sidebar name={"Recurring Transaction"} img={""} />
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
            <Btn_sidebar name={"Tasks"} img={""} />
            <Btn_sidebar name={"Reports"} img={""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
