import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { companies } from "../work-data.js";
const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#64FFDA",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#8892B0",
          "&.Mui-selected": {
            color: "#64FFDA",
          },
        },
      },
    },
  },
});
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function WorkTabs() {
  const [value, setValue] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  // call function on mobile view
  React.useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ width: "100%" }}
        className="mt-10 md:flex items-start space-x-4 "
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            orientation={width > 600 ? "vertical" : "horizontal"}
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="work tabs"
          >
            {companies.map((company, index) => (
              <Tab label={company.prefix} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Box>
        {companies.map((company, index) => (
          <TabPanel value={value} index={index}>
            <div className="flex flex-col">
              <h1 className="text-[#CCD6F6] mt-10 md:mt-0 text-[18px] md:text-[20px] font-semibold">
                {company.role}{" "}
                <a
                  className="text-[#64FFDA] text-[18px] md:text-[20px] link link-underline link-underline-black"
                  href={company.url}
                >
                  @ {company.name}
                </a>
              </h1>
              <h2 className="text-[#a8b2d1] mt-2 text-xs">
                {company.from} - {company.to}
              </h2>
              <h2 className="text-[#8892B0] mt-2 text-xs md:text-lg">
                {company.headline}
              </h2>
              <ul className="skills-list flex flex-col  mt-6 ">
                {company.tasks.map((task, index) => (
                  <li
                    key={index}
                    className="text-[#8892B0] text-sm md:text-lg font-light mt-2"
                  >
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </TabPanel>
        ))}
      </Box>
    </ThemeProvider>
  );
}
