import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
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
      description: `Key Responsibilities:       Design, develop, and maintain a highly scalable BizzTm dashboard that enables teams to efficiently manage orders and products. Collaborate with stakeholders to gather requirements and translate them into technical specifications.
      Skills: React,Redux,Chart,MaterialUi,Tailwind,Git,Amplify,EC2,GraphQl
      `,
    },
    {
      label: "PixelPay Media Pvt Ltd",
      description: `Facebook Reporting Tool:      Customize and tailor the Facebook ad automation dashboard to meet the specific needs of our organization. 
        Performance Portal:  Independently develop a comprehensive Employee Management reporting panel from scratch to production. Design, implement, and enhance the portal to provide performance insights, analytics, and reporting capabilities for effective employee management.
        Coupon Admin Panel:    Design and develop a coupon management panel and API endpoints for coupon websites. This helps to manage coupons, track usage, and provide API endpoints for seamless integration with coupon websites.
        Dashboard Content Nation:    Website management tool: manage multiple accounts in one place.
        Website, CMS & Downloader Tools:  Optimize the website and downloading tools for videos, songs, and images. Single-page landing pages, CMS setup, and basic SEO. 
        Skills: React,Redux,Chart,MaterialUi ,Amplify,Git                                       
        `,
    },
    {
      label: "Biztechnosys Pvt Ltd",
      description: `Key Responsibilities:       Customize Vtiger CRM by developing new modules and creating webpages to meet specific business requirements. Implement tailored solutions, integrate third-party systems, and enhance the CRM's functionality for optimal performance and improved customer relationship management.`,
    },
  ];

  const education = [
    {
      label:
        "B.Tech | Information Technology | C.V. Raman Global University,Odisha",
      description: `I completed my graduation in 2016-2020 with 7.17 cgpa. Apart from this I did Diploama in It Infrastructure by C-DAC That helps to knowledge of all modren technlogies: Hadoop Ecosystem,Web Developement,Networking, Software Developemmnt Life Cycle, Android Developement etc.`,
    },
    {
      label: "12th | Science Stream | S.K.B. Degree College,Bihar",
      description: `I completed intermediate in 2016 with 72.8%.`,
    },
    {
      label: "10th | Islamia Urdu Academy,Bihar",
      description: `Metric completed in 2013 with 75.8%`,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        padding: "6rem",
        height: "100vh",
        backgroundImage: "linear-gradient(45deg, #54d6ff, #0071ff)",
      }}
    >
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
