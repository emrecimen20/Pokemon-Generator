import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function Home({ data, handleChange, image, type }) {
  return (
    <div>
      <div className="mainDiv">
        <Box width={"400px"} display={"flex"} flexDirection={"column"}>
          <TextField
            onChange={handleChange}
            type="number"
            size="medium"
            label="Pokemon"
          />
          <Button sx={{ marginTop: "15px" }} size="medium" variant="contained">
            Select
          </Button>
        </Box>
      </div>
      <div className="cardDiv">
        <Card sx={{ maxWidth: 400, marginTop: "50px" }}>
          <Typography variant="h6">Name:{data.name}.</Typography>
          <CardMedia sx={{ marginTop: "20px" }} component="img" image={image} />

          <Typography sx={{ marginTop: "20px" }}>
            Weight:{data.weight}
          </Typography>
          {/* <Typography sx={{ marginTop: "20px" }}>
            Type:
            {type.map((value, key) => {
              return <div key={key}>{value.type.name}</div>;
            })}
          </Typography> */}
        </Card>
      </div>
    </div>
  );
}

export default Home;
