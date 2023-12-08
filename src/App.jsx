import { Button, IconButton, styled } from "@mui/material";
import "./App.css";
import SaveIcon from "@mui/icons-material/Save";
import { AddShoppingCart } from "@mui/icons-material";


function App() {

const BtnStyled = styled(Button)({
  color: "#fff", 
  fontSize:"25px",
  background: "linear-gradient(45deg,#EF688B,#FF8353)",
})

  return (
    <>
    <div>
      <BtnStyled> Botão com Estilo</BtnStyled>
    </div>
    <IconButton color="error">
      <AddShoppingCart />
    </IconButton>
      <div>
        <Button> Hello world!</Button>
      </div>
      <div>
        <Button 
        startIcon={<SaveIcon />}
        variant="contained"
        color="success"
        >Save</Button>
      </div>
      <div>
        <Button variant="outlined">
        </Button>
      </div>
    </>
  );
}

export default App;
