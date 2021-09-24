import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, Autocomplete } from '@mui/material';
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme();

const investmentTypes = ['Bond', 'Stocks', 'Real Estate'];

export default function FinancialForm() {
  let history = useHistory();
  const [investmentAmount, setInvestmentAmount] = React.useState('');
  const [totalNetWorth, setTotalNetWorth] = React.useState('');
  const [yearlyIncome, setYearlyIncome] = React.useState('');
  const [creditScore, setCreditScore] = React.useState('');
  const [investmentType, setInvestmentType] = React.useState(investmentTypes[0]);
  const [inputsetInvestmentType, setInputsetInvestmentType] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();


    if (investmentAmount === "" || investmentType === "" || investmentType === "undefined" || investmentType === "null" || totalNetWorth === "" || yearlyIncome === " " || creditScore === "") {
      // alert("Please fill all Details");
      toast("Please fill all Details");
    } 
    else if(creditScore < 300 || creditScore > 850 ){
      toast("Please Enter Valid Credit Score Between 300 to 850");
    }
    else {
      const res = await fetch("/investor/qualification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ investmentAmount, investmentType, totalNetWorth, yearlyIncome, creditScore })
      }).then(function (response) { return response.json(); })
        .then(function (data) {
          const items = data;
          return items;
        });
      console.log(res);
      if (res.qualified === true) {
        toast("You Are Qualified");
        localStorage.setItem("qualifiedData", res.message);
        history.push("/success");
      } else {
        toast("You Are Not Qualified");
        localStorage.setItem("notqualifiedData", res.message);
        history.push("/notqualified");
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ToastContainer />
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: 3,
            bgcolor: 'background.paper',
            p: 2
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 2}}>
            Form Title
          </Typography>
          <Typography sx={{ mb: 2}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

            <FormControl fullWidth sx={{ mb: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={investmentAmount}
                name="investmentAmount"
                onChange={(e) => { setInvestmentAmount(e.target.value) }}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Amount"
                type="number"
              />
            </FormControl>

            <Autocomplete
              value={investmentType}
              onChange={(event, newValue) => {
                setInvestmentType(newValue);
              }}
              inputValue={inputsetInvestmentType}
              onInputChange={(event, newInputValue) => {
                setInputsetInvestmentType(newInputValue);
              }}
              id="controllable-states-demo"
              options={investmentTypes}
              sx={{ mb: 2 }}
              renderInput={(params) => <TextField {...params} label="Investment Type" />}
            />

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel htmlFor="outlined-adornment-amount">Total Net Worth </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={totalNetWorth}
                onChange={(e) => { setTotalNetWorth(e.target.value) }}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Total Net Worth"
                type="number"
              />
            </FormControl>


            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel htmlFor="outlined-adornment-amount">User Estimated Yearly Income</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={yearlyIncome}
                onChange={(e) => { setYearlyIncome(e.target.value) }}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="User Estimated Yearly Income"
                type="number"
              />
            </FormControl>


            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel htmlFor="outlined-adornment-amount">User Estimated Credit Score</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={creditScore}
                onChange={(e) => { setCreditScore(e.target.value) }}
                startAdornment={<InputAdornment position="start"></InputAdornment>}
                label="User Estimated Credit Score"
                type="number"
              />
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}