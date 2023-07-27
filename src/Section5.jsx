import React from 'react';
import {MoneyBill1} from '@styled-icons/fa-regular/MoneyBill1';
import { CurrencyDollar } from '@styled-icons/bootstrap/CurrencyDollar';
import {Diamond} from '@styled-icons/ionicons-outline/Diamond';

export default function Section5() {
  return (
    <div><section className="section5">
        <h3>Pricing</h3>
        <hr/>
        <div className="boxes">
            <div className="box">
            <MoneyBill1 className="fa fa-dollar" size="36" />
                <h1>22$</h1>
                <p>Web Development <br/>
                    Advertising
                </p>
                <a href="" className="btnsend">$ Buy</a>
            </div>
            <div className="box">
                <CurrencyDollar className="fa fa-dollar" size="36" />
                <h1>35$</h1>
                <p>Web Development <br/>Advertising <br/>Game Development</p>
                <a href="" className="btnsend">$ Buy</a>
            </div>
            <div className="box">
                <Diamond className="fa fa-diamond" size="36"/>
                <h1>50$</h1>
                <p>Web Development <br/>Advertising <br/>Game Development <br/>Music Writing <br/>Photography
                </p>
                <a href="" className="btnsend">$ Buy</a>
            </div>
        </div>
     
    </section></div>
  )
}
