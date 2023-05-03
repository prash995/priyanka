import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import { AppBar, Divider, TextField } from "@mui/material";
import Tab from "@mui/material/Tab";
import {Typography} from "@mui/material"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export const Home = () => {
  const [value, setvalue] = useState();
  const [data, setdata] = useState();
  const [inputs, setInputs] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: ''
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setInputs({
      ...inputs,
      [name]: value
    });
    // if(inputs.input1<15){
    //     setdata(1)
    // }else if(inputs.input1>15 && inputs.input1<30){
    //     setdata(2)
    // }else if(inputs.input1>31 && inputs.input1<60){
    //     setdata(3)
    // }else if(inputs.input1>61 && inputs.input1<100){
    //     setdata(4)
    // }
  };




    const handleChange = (e, newvalue) => {
    setvalue(newvalue);
  };
  
  //for table styling
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  
  return (
    <div>
      <Box sx={{ backgroundColor: "lightskyblue", marginLeft: "-25px" ,marginRight: "-25px"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab value="one" label="Natural Topography or Vegetation" />
          <Tab value="two" label="Heat Island Effect, Non-roof & Roof" />
          <Tab value="three" label="Passive Architecture" />
          <Tab value="four" label="Universal Design" />
          <Tab value="five" label="Green Parking Facility" />
          <Tab value="six" label="Access to Amenities" />
          <Tab value="seven" label="Basic Facilities for Construction Workforce" />
          <Tab value="eight" label="Green Education & Awareness" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={"one"} >
        <div>
        <Box sx={{p:3}}>
            <Box sx={{border:"2px solid lightgray"}}>
        {/* <Typography  sx={{fontSize:"18px",fontFamily: 'Raleway, Arial',fontWeight: 'bold'}}>Natural Topography or Vegetation</Typography> */}
        <Divider/>
        
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Natural Topography or Vegetation</StyledTableCell>
            <StyledTableCell align="right">&nbsp;</StyledTableCell>
            <StyledTableCell align="right">&nbsp;</StyledTableCell>
            <StyledTableCell align="right">&nbsp;</StyledTableCell>
            <StyledTableCell align="right">4</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow >
              <StyledTableCell component="th" scope="row">
              Percentage of natural topography on ground surface
              </StyledTableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right"><TextField placeholder="Percentage" onChange={handleInputChange} name="input1"></TextField></TableCell>
              <TableCell align="right">{inputs.input1}</TableCell>
            </TableRow>
        <TableRow >
              <StyledTableCell component="th" scope="row">&nbsp;
              </StyledTableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right"><TextField placeholder="Percentage" onChange={handleInputChange} name="input2"></TextField></TableCell>
              <TableCell align="right">{inputs.input2}</TableCell>
            </TableRow>
        <TableRow >
              <StyledTableCell component="th" scope="row">
              Vegetation on Ground & Built structures              
              </StyledTableCell>

              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right"><TextField placeholder="Percentage" onChange={handleInputChange} name="input3"></TextField></TableCell>
              <TableCell align="right">{inputs.input3}</TableCell>
            </TableRow>
        <TableRow >
              <StyledTableCell component="th" scope="row">&nbsp;
              </StyledTableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right"><TextField placeholder="Percentage" onChange={handleInputChange} name="input4"></TextField></TableCell>
              <TableCell align="right">{inputs.input4}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        
        </Box>
        </Box>
        </div>
        
      </TabPanel>
      <TabPanel value={value} index={"two"}>
      <div>
        <Box sx={{p:3}}>
            <Box sx={{border:"2px solid lightgray"}}>
        {/* <Typography  sx={{fontSize:"18px",fontFamily: 'Raleway, Arial',fontWeight: 'bold'}}>Natural Topography or Vegetation</Typography> */}
        <Divider/>
        
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>"Heat Island Effect, Non-roof & Roof"</StyledTableCell>
            <StyledTableCell align="right">&nbsp;</StyledTableCell>
            <StyledTableCell align="right">&nbsp;</StyledTableCell>
            <StyledTableCell align="right">&nbsp;</StyledTableCell>
            <StyledTableCell align="right">4</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow >
              <StyledTableCell component="th" scope="row">
              Percentage of the area covered with trees/ low SRI materials/ grass pavers to the total of total non-roof area
              </StyledTableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right"><TextField placeholder="Percentage" onChange={handleInputChange} name="input1"></TextField></TableCell>
              <TableCell align="right">{inputs.input1}</TableCell>
            </TableRow>
        <TableRow >
              <StyledTableCell component="th" scope="row">&nbsp;
              </StyledTableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right"><TextField placeholder="Percentage" onChange={handleInputChange} name="input2"></TextField></TableCell>
              <TableCell align="right">{inputs.input2}</TableCell>
            </TableRow>
        <TableRow >
              <StyledTableCell component="th" scope="row">
              Percentage area covered with high SRI materials/ vegetation to the exposed roof area             
              </StyledTableCell>

              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right"><TextField placeholder="Percentage" onChange={handleInputChange} name="input3"></TextField></TableCell>
              <TableCell align="right">{inputs.input3}</TableCell>
            </TableRow>
        <TableRow >
              <StyledTableCell component="th" scope="row">&nbsp;
              </StyledTableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right"><TextField placeholder="Percentage" onChange={handleInputChange} name="input4"></TextField></TableCell>
              <TableCell align="right">{inputs.input4}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        
        </Box>
        </Box>
        </div>
      </TabPanel>
      <TabPanel value={value} index={"three"}>
        Item Three
        <div>
        <Box sx={{p:3}}>
            <Box sx={{border:"2px solid lightgray"}}>
        {/* <Typography  sx={{fontSize:"18px",fontFamily: 'Raleway, Arial',fontWeight: 'bold'}}>Natural Topography or Vegetation</Typography> */}
        <Divider/>
        
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Natural Topography or Vegetation</StyledTableCell>
            <StyledTableCell align="right">&nbsp;</StyledTableCell>
            <StyledTableCell align="right">&nbsp;</StyledTableCell>
            <StyledTableCell align="right">&nbsp;</StyledTableCell>
            <StyledTableCell align="right">4</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow >
              <StyledTableCell component="th" scope="row">
              Exterior Openings: Atleast : &nbsp;<TextField placeholder="Percentage" onChange={handleInputChange} name="input1"></TextField> &nbsp; of the exterior openings (fenestration) have a Projection Factor* of 0.5 or more              </StyledTableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right"><TextField placeholder="Percentage" onChange={handleInputChange} name="input1"></TextField></TableCell>
              <TableCell align="right">{inputs.input1}</TableCell>
            </TableRow>
        <TableRow >
              <StyledTableCell component="th" scope="row">&nbsp;The percentage of skylight area should be minimum 10% &nbsp;<TextField placeholder="Percentage" onChange={handleInputChange} name="input1"></TextField> &nbsp;of the building roof area.
              </StyledTableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">{inputs.input2}</TableCell>
            </TableRow>
        <TableRow >
              <StyledTableCell component="th" scope="row">
              50% &nbsp;<TextField placeholder="Percentage" onChange={handleInputChange} name="input1"></TextField> &nbsp;of the common areas with daylight illuminance levels of minimum 110 Lux              </StyledTableCell>

              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">{inputs.input3}</TableCell>
            </TableRow>
        <TableRow >
              <StyledTableCell component="th" scope="row">&nbsp;Passive  Cooling / Heating Technologies: Wind tower, Earth tunnel, Geothermal technologies and any other passive measures, as applicable.
              </StyledTableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">{inputs.input4}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        
        </Box>
        </Box>
        </div>
      </TabPanel>
      <TabPanel value={value} index={"four"}>
        Item four
        <div>
        <Box sx={{p:3}}>
            <Box sx={{border:"2px solid lightgray"}}>
        {/* <Typography  sx={{fontSize:"18px",fontFamily: 'Raleway, Arial',fontWeight: 'bold'}}>Natural Topography or Vegetation</Typography> */}
        <Divider/>
        
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Universal Design</StyledTableCell>
            <StyledTableCell align="right">&nbsp;</StyledTableCell>
            <StyledTableCell align="right">&nbsp;</StyledTableCell>
            <StyledTableCell align="right">&nbsp;</StyledTableCell>
            <StyledTableCell align="right">4</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow >
              <StyledTableCell component="th" scope="row">
              one car park space for every 250 dwelling units. Min. dimensions for differently abled parking shall be 3.6 m(width) x 6.0 m(length)</StyledTableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right"><TextField placeholder="Units"></TextField></TableCell>
              <TableCell align="right">{inputs.input1}</TableCell>
            </TableRow>
        <TableRow >
              <StyledTableCell component="th" scope="row">&nbsp;minimum one rest room for every 250 dwelling units.
              </StyledTableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">{inputs.input2}</TableCell>
            </TableRow>
        <TableRow >
              <TableCell component="th" scope="row">
Uniformity in floor level for hindrance-free movement in common areas & exterior areas with ramps and hand rails on atleast one side of ramp.
<h3>Walkways/ pathways with adequate width in exterior areas</h3>
<h3>Braille and audio assistance in lifts for visually impaired people. Elevator call buttons designed to be within reach of wheelchair occupants</h3>
<h3>Visual warning signages in common areas & exterior areas</h3>
</TableCell>

              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">{inputs.input3}</TableCell>
            </TableRow>
        <TableRow >
              <StyledTableCell component="th" scope="row">&nbsp;
              </StyledTableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">{inputs.input4}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        
        </Box>
        </Box>
        </div>
      </TabPanel>
      <TabPanel value={value} index={"five"}>
        Item fivr
        <div>
        <Box sx={{p:3}}>
            <Box sx={{border:"2px solid lightgray"}}>
        {/* <Typography  sx={{fontSize:"18px",fontFamily: 'Raleway, Arial',fontWeight: 'bold'}}>Natural Topography or Vegetation</Typography> */}
        <Divider/>
        
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Green Parking Facility</StyledTableCell>
            <StyledTableCell align="right">&nbsp;</StyledTableCell>
            <StyledTableCell align="right">&nbsp;</StyledTableCell>
            <StyledTableCell align="right">&nbsp;</StyledTableCell>
            <StyledTableCell align="right">4</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow >
              <StyledTableCell component="th" scope="row">
              Ventilation for Basements Provide axial fans, CO sensors               </StyledTableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right"><TextField placeholder="Percentage" onChange={handleInputChange} name="input1"></TextField></TableCell>
              <TableCell align="right">{inputs.input1}</TableCell>
            </TableRow>
        <TableRow >
              <StyledTableCell component="th" scope="row">&nbsp;Electric charging facility Percentage of vehicles to be catered by the common 
charging facility
              </StyledTableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right"><TextField placeholder="Percentage" onChange={handleInputChange} name="input2"></TextField></TableCell>
              <TableCell align="right">{inputs.input2}</TableCell>
            </TableRow>
        <TableRow >
              <StyledTableCell component="th" scope="row">
              Dedicated Bicycle parking to atleast 5% of the dwelling
units            
              </StyledTableCell>

              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right"><TextField placeholder="Percentage" onChange={handleInputChange} name="input3"></TextField></TableCell>
              <TableCell align="right">{inputs.input3}</TableCell>
            </TableRow>
        <TableRow >
              <StyledTableCell component="th" scope="row">&nbsp;
              </StyledTableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">{inputs.input4}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        
        </Box>
        </Box>
        </div>
      </TabPanel>
      <TabPanel value={value} index={"six"}>
        Item six
        <div>
        <Box sx={{p:3}}>
            <Box sx={{border:"2px solid lightgray"}}>
        {/* <Typography  sx={{fontSize:"18px",fontFamily: 'Raleway, Arial',fontWeight: 'bold'}}>Natural Topography or Vegetation</Typography> */}
        <Divider/>
        
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Access to Amenities</StyledTableCell>
            <StyledTableCell align="right">&nbsp;</StyledTableCell>
            <StyledTableCell align="right">&nbsp;</StyledTableCell>
            <StyledTableCell align="right">&nbsp;</StyledTableCell>
            <StyledTableCell align="right">4</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow >
              <StyledTableCell component="th" scope="row">
              site with access to atleast six basic house-hold amenities, within a walking distance of 1 km from the building entrance              </StyledTableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right"><TextField placeholder="Percentage" onChange={handleInputChange} name="input1"></TextField></TableCell>
              <TableCell align="right">{inputs.input1}</TableCell>
            </TableRow>
        <TableRow >
              <StyledTableCell component="th" scope="row">Play area for children to include tot-lot play equipment which is permanently installed
              <h3>Seating area in common spaces
Projects with 250 dwelling units or less: one common toilet for service staff & visitors.
Projects with more than 250 dwelling units: 1 toilet for every 250 additional dwelling units or 1 toilet per block/ tower, as applicable
</h3>
              </StyledTableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right"><TextField placeholder="Percentage" onChange={handleInputChange} name="input2"></TextField></TableCell>
              <TableCell align="right">{inputs.input2}</TableCell>
            </TableRow>
        <TableRow >
              <StyledTableCell component="th" scope="row">
              &nbsp;          
              </StyledTableCell>

              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right"><TextField placeholder="Percentage" onChange={handleInputChange} name="input3"></TextField></TableCell>
              <TableCell align="right">{inputs.input3}</TableCell>
            </TableRow>
        <TableRow >
              <StyledTableCell component="th" scope="row">&nbsp;
              </StyledTableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right"><TextField placeholder="Percentage" onChange={handleInputChange} name="input4"></TextField></TableCell>
              <TableCell align="right">{inputs.input4}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        
        </Box>
        </Box>
        </div>
      </TabPanel>
      <TabPanel value={value} index={"seven"}>
        Item seven
        <div>
        <Box sx={{p:3}}>
            <Box sx={{border:"2px solid lightgray"}}>
        {/* <Typography  sx={{fontSize:"18px",fontFamily: 'Raleway, Arial',fontWeight: 'bold'}}>Natural Topography or Vegetation</Typography> */}
        <Divider/>
        
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Natural Topography or Vegetation</StyledTableCell>
            <StyledTableCell align="right">&nbsp;</StyledTableCell>
            <StyledTableCell align="right">&nbsp;</StyledTableCell>
            <StyledTableCell align="right">&nbsp;</StyledTableCell>
            <StyledTableCell align="right">4</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow >
              <StyledTableCell component="th" scope="row">
              Percentage of the area covered with trees/ low SRI materials/ grass pavers to the total of total non-roof area
              </StyledTableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right"><TextField placeholder="Percentage" onChange={handleInputChange} name="input1"></TextField></TableCell>
              <TableCell align="right">{inputs.input1}</TableCell>
            </TableRow>
        <TableRow >
              <StyledTableCell component="th" scope="row">&nbsp;
              </StyledTableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right"><TextField placeholder="Percentage" onChange={handleInputChange} name="input2"></TextField></TableCell>
              <TableCell align="right">{inputs.input2}</TableCell>
            </TableRow>
        <TableRow >
              <StyledTableCell component="th" scope="row">
              Percentage area covered with high SRI materials/ vegetation to the exposed roof area             
              </StyledTableCell>

              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right"><TextField placeholder="Percentage" onChange={handleInputChange} name="input3"></TextField></TableCell>
              <TableCell align="right">{inputs.input3}</TableCell>
            </TableRow>
        <TableRow >
              <StyledTableCell component="th" scope="row">&nbsp;
              </StyledTableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
              <TableCell align="right"><TextField placeholder="Percentage" onChange={handleInputChange} name="input4"></TextField></TableCell>
              <TableCell align="right">{inputs.input4}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        
        </Box>
        </Box>
        </div>
      </TabPanel>

      {/* {value === "one" && <Test />}
      {value === "two" && <Test2 />} */}
    </div>
  );
};
function TabPanel(props) {
    const { children, value, index } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        // id={`simple-tabpanel-${index}`}
        // aria-labelledby={`simple-tab-${index}`}
        // {...other}
      >
        {value === index && (
          <Box sx={{ backgroundColor:"lightcyan", marginLeft: "-25px",marginRight: "-25px" }}>
            <>{children}</>
          </Box>
        )}
      </div>
    );
  }
