'use client'

import ParentComponent from "../Components/ParentGraph"
import Users from "../Components/Users"
import Layout from "../Components/Layout"

const Dashboard = ()=>{
    return(
  <Layout>
        <div>
            <Users/>
            <ParentComponent/>
        </div>
        </Layout>
    )
}
export default Dashboard;