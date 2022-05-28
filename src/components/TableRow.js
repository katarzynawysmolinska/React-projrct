import { useState, useEffect } from "react";
import axios from "axios";
import TableRow from "@mui/material/TableRow/TableRow";
import TableCell from "@mui/material/TableCell/TableCell";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Fade from "@mui/material/Fade/Fade";

const TableRowC = (props) => {
  const [elementData, setElementData] = useState({});
  const [clicked, setClicked] = useState(false);
  const [elementClicked, setElementClicked] = useState("");

  const clickHandler = (e) => {
    if (props.nameList.indexOf(e.target.textContent) !== -1) {
      //sprawdzanie czy dana nazwa jest na liście
      setElementClicked(e.target.textContent);
      setClicked(!clicked);
    }
  };

  useEffect(() => {
    if (elementClicked) {
    axios
      .get(
        `https://api.github.com/repos/${props.username}/${elementClicked}/languages?access_token=`
      )
      .then((data) => {
        setElementData(data.data);
      });
    }
  }, [props.username, elementClicked]);
  console.log(elementData);

  return (
    <TableRow onClick={clickHandler}>
      <TableCell align="left">{props.name}</TableCell>
      <TableCell align="right">{props.stargazers_count}</TableCell>
      <TableCell align="right">
        {elementData && clicked && (
          <List sx={{ bgcolor: "Background.paper", margin: 0, align: "right" }}>
            {Object.entries(elementData).length === 0 ? (
              <Fade in={true} timeout={2000}>
                <span>No data</span>
              </Fade>
            ) : (
              Object.keys(elementData).map((item, i) => {
                return (
                  <Fade key={i} in={true} timeout={2000}>
                    <ListItem sx={{ justifyContent: "flex-end" }}>
                      {item}: {elementData[item]}B
                    </ListItem>
                  </Fade>
                );
              })
            )}
          </List>
        )}
      </TableCell>
    </TableRow>
  );
};

export default TableRowC;
