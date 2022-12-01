import React, { useEffect, useState } from "react";

import Btn_sidebar from "../Btn_sidebar/Btn_sidebar";
import Dropdown_btn from "../Dropdown/Dropdown_btn";
import "./Sidebar.scss";

import logo from "../../assets/Images/Brand-logo.png";
import { NavLink } from "react-router-dom";


const Sidebar = () => {
  const [isTriggered, setIsTriggred] = useState(false);
  function enterMouse() {
      if(isTriggered){
        document.getElementById("sidebar").classList.remove("sidebar_mini");
      }
  }
  function leaveMouse() {
    if(isTriggered){
      document.getElementById("sidebar").classList.add("sidebar_mini");
    }   
  }

  function handleClick(){
    setIsTriggred(!isTriggered)
    if(!isTriggered){
      document.getElementById("sidebar").classList.toggle("sidebar_mini")
    }
    document.getElementById("sidebar").classList.toggle("close")
  }

  return (
    <>
      <div
        className="sidebar"
        id="sidebar"
        onMouseLeave={leaveMouse}
        onMouseEnter={enterMouse}
      >
        <div className="sidebar_container">
          <div className="sidebar_logo">
            <img src="./images/sidebar_icons/Brand-logo.png" alt="sidebar_logo" />
            <div className="collapse_btn" onClick={handleClick}>
              <img src="./images/sidebar_icons/icon.png" alt="arrow" />
            </div>
          </div>

          <div className="scroller">
          <NavLink to="/">
            <Btn_sidebar name={"Dashboard"} img={"./images/sidebar_icons/bxs-dashboard.svg"} />
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
                <Btn_sidebar name={"Item/Service"} img={"./images/sidebar_icons/bxs-cube.svg"} />
              </NavLink>
              <NavLink to="banking">
                <Btn_sidebar name={"Banking"} img={"./images/sidebar_icons/bank.svg"} />
              </NavLink>
              {/* <NavLink to="business_accounts"> */}
                <Dropdown_btn
                  name={"Business Accounts"}
                  img={"./images/sidebar_icons/bxs-business.svg"}
                  arrow={"﹥"}
                  dropdown_items={["Leads", "Contacts", "Vendors", "Customers"]}
                />
              {/* </NavLink> */}
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
                <Btn_sidebar name={"Chart of Accounts"} img={"./images/sidebar_icons/bxs-receipt.svg"} />
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
              {/* <NavLink to="sales"> */}
                <Dropdown_btn
                  name={"Sales"}
                  img={"./images/sidebar_icons/bxs-cart-alt.svg"}
                  arrow={"﹥"}
                  dropdown_items={["Estimate", "Sales Order", "Packages", "Pick-list", "Shipment", "Invoice", "Payments", "Credit Notes"]}
                />
              {/* </NavLink> */}
              {/* <NavLink to="purchase"> */}
                <Dropdown_btn
                  name={"Purchase"}
                  img={"./images/sidebar_icons/bag.svg"}
                  arrow={"﹥"}
                  dropdown_items={["Requisitions", "Quotations", "Purchase Orders", "Goods Receipts", "Bills", "Payments", "Vendor Credit"]}
                />
              {/* </NavLink> */}
              {/* <NavLink to="investment"> */}
                <Dropdown_btn
                  name={"Investment"}
                  img={"./images/sidebar_icons/Group 9.svg"}
                  arrow={"﹥"}
                  dropdown_items={["Buy", "Sell"]}
                />
              {/* </NavLink> */}
              {/* <NavLink to="production"> */}
                <Dropdown_btn
                  name={"Production"}
                  img={"./images/sidebar_icons/bxs-package.svg"}
                  arrow={"﹥"}
                  dropdown_items={["Bill of Material", "Production Orders", "Issues", "Receipts"]}
                />
              {/* </NavLink> */}
              {/* <NavLink to="job_work"> */}
                <Dropdown_btn
                  name={"Job Work"}
                  img={"./images/sidebar_icons/bxs-palette.svg"}
                  arrow={"﹥"}
                  dropdown_items={["Job Orders", "Received Goods", "Sent Goods"]}
                />
              {/* </NavLink> */}
              {/* <NavLink to="taxation"> */}
                <Dropdown_btn
                  name={"Taxation"}
                  img={"./images/sidebar_icons/Layer_x0020_1.svg"}
                  arrow={"﹥"}
                  dropdown_items={["Income Tax", "GST"]}
                />
              {/* </NavLink> */}
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
                <Btn_sidebar name={"Workflow Rules"} img={"./images/sidebar_icons/bxs-arrow-from-top.svg"} />
              </NavLink>
              <NavLink to="recurring_transaction">
                <Btn_sidebar name={"Recurring Transaction"} img={"./images/sidebar_icons/bx-transfer-alt.svg"} />
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
                <Btn_sidebar name={"Tasks"} img={"./images/sidebar_icons/bx-task.svg"} />
              </NavLink>
              <NavLink to="reports">
                <Btn_sidebar name={"Reports"} img={"./images/sidebar_icons/bxs-report.svg"} />
              </NavLink>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
