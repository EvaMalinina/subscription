import React from "react";
import {
  Redirect,
  Switch,
} from "react-router-dom";
import Parameters from "../components/Parameters/Parameters";
import Layout from "../components/Layout";
import Payment from "../components/Payment/Payment";
import Confirmation from "../components/Confirmation/Confirmation";


export default function Routes() {
  return(
    <Switch>
      <Redirect exact from='/' to='/subscription/parameters'/>

      <Layout path="/subscription/parameters" exact>
        <Parameters/>
      </Layout>
      <Layout path="/subscription/payment" exact>
        <Payment/>
      </Layout>
      <Layout path="/subscription/confirmation" exact>
        <Confirmation/>
      </Layout>
    </Switch>
  )
};