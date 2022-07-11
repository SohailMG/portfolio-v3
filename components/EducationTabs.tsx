import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { schools } from "../school-data.js";
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
export default function EducationTabs() {
  const [value, setValue] = React.useState(0);
  const [width, setWidth] = React.useState(window.innerWidth);
  // call function on mobile view
  React.useEffect(() => {
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
            {schools.map((school, index) => (
              <Tab label={school.prefix} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Box>
        {schools.map((school, index) => (
          <TabPanel value={value} index={index}>
            <div className="flex flex-col">
              <h1 className="text-[#CCD6F6] mt-10 md:mt-0 text-[18px] md:text-[20px] font-semibold">
                {school.type}{" "}
                <a
                  className="text-[#64FFDA] text-[18px] md:text-[20px] link link-underline link-underline-black"
                  href={school.url}
                >
                  @ {school.name}
                </a>
              </h1>
              <h2 className="text-[#a8b2d1] mt-2 text-xs">
                {school.from} - {school.to}
              </h2>
              <h2 className="text-[#8892B0] mt-2 text-xs">
                Grade - {school.grade}
              </h2>
              <h2 className="text-[#64FFDA] mt-2 text-xs md:text-lg">Topics</h2>
              <span className="flex items-center text-center gap-1 flex-wrap text-xs text-[#8892b0]">
                {school.topics.map((topic) => (
                  <span className="text-xs md:text-sm topic">{topic}</span>
                ))}
              </span>
              {school.keyPoints && (
                <h2 className="text-[#64FFDA] mt-2 text-xs md:text-lg">
                  Key Skills Gained:
                </h2>
              )}
              <ul className="skills-list flex flex-col  mt-6 ">
                {school.keyPoints &&
                  school.keyPoints.map((point, index) => (
                    <li
                      key={index}
                      className="text-[#8892B0] text-sm md:text-lg font-light mt-2"
                    >
                      {point}
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
