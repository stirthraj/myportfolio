import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import VerticalLinearStepper from "./InfoStepper";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box maxWidth="md">{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Info() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const work = [
    {
      label: "BizzTm Pvt Ltd",
      description: `<b>Key Responsibilities: 
      </b>      <p>
      Design, develop, and maintain a highly scalable BizzTm dashboard that enables teams to efficiently manage orders and products. Collaborate with stakeholders to gather requirements and translate them into technical specifications.</p>
     <b> Skills: React,Redux,Chart,MaterialUi,Tailwind,Git,Amplify,EC2,GraphQl</b>
      `,
    },
    {
      label: "PixelPay Media Pvt Ltd",
      description: `<b>Facebook Reporting Tool: </b> 
      <p>Customize and tailor the Facebook ad automation dashboard to meet the specific needs of our organization.</p>

     <b> Performance Portal:</b>  <p>Independently develop a comprehensive Employee Management reporting panel from scratch to production. Design, implement, and enhance the portal to provide performance insights, analytics, and reporting capabilities for effective employee management.</p>
      <b>Coupon Admin Panel:</b>   <p> Design and develop a coupon management panel and API endpoints for coupon websites. This helps to manage coupons, track usage, and provide API endpoints for seamless integration with coupon websites.</p>
     <b> Dashboard Content Nation:</b>    <p>Website management tool: manage multiple accounts in one place.</p>
      <b>Website, CMS & Downloader Tools:</b><p>  Optimize the website and downloading tools for videos, songs, and images. Single-page landing pages, CMS setup, and basic SEO. 
      </p>
      <b> Skills: React,Redux,Chart,MaterialUi ,Amplify,Git </b>
                                             
        `,
    },
    {
      label: "Biztechnosys Pvt Ltd",
      description: `<b>Key Responsibilities:  </b> <p>Customize Vtiger CRM by developing new modules and creating webpages to meet specific business requirements. Implement tailored solutions, integrate third-party systems, and enhance the CRM's functionality for optimal performance and improved customer relationship management.</p>`,
    },
  ];

  const education = [
    {
      label:
        "B.Tech | Information Technology | C.V. Raman Global University,Odisha",
      description: `Graduated in 2016-2020 with a 7.17 CGPA. Also completed a C-DAC Diploma in IT Infrastructure, gaining knowledge in various modern technologies such as Hadoop, web development, networking, software development life cycle, and Android development.`,
    },
    {
      label: "12th | S.K.B. Degree College,Bihar",
      description: `Completed intermediate in 2016 with a 72.8% score.`,
    },
    {
      label: "10th | Islamia Urdu Academy,Bihar",
      description: `Completed matriculation in 2013 with a 75.8% score.`,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        padding: "10%",
        minHeight: "100vh",
        backgroundImage: "linear-gradient(45deg, #54d6ff, #0071ff)",
      }}
    >
      <div id="pages" />
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="My Experience" {...a11yProps(0)} />
          <Tab label="My Education" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <VerticalLinearStepper steps={work} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <VerticalLinearStepper steps={education} />
      </TabPanel>
    </Box>
  );
}
